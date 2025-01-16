'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (
    !email ||
    !/^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|net|org)$/.test(email) ||
    !/(yahoo|gmail|outlook)\.com$/.test(email)
  ) {
    throw new Error('Invalid e-mail address!');
  }

  if (!password) {
    throw new Error('Password is required!');
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    throw new Error('Authentication failed! Incorrect e-mail address or password!');
  }

  revalidatePath('/');
  redirect('/home');
}

export async function register(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;
  const name = formData.get('name') as string;
  const surname = formData.get('surname') as string;


  if (
    !email ||
    !/^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|net|org)$/.test(email) ||
    !/(yahoo|gmail|outlook)\.com$/.test(email)
  ) {
    throw new Error('Invalid e-mail address!');
  }

  if (!name || !/^[a-zA-Z]+$/.test(name)) {
    {
      throw new Error('Invalid name!');
    }
  }

  if (!surname || !/^[a-zA-Z]+$/.test(surname)) {
    {
      throw new Error('Invalid surname!');
    }
  }

  if (
    !password ||
    password.length < 6 ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[^a-zA-Z0-9]/.test(password)
  ) 
    {
      throw new Error('Invalid password!');
    }
  

  if (password !== confirmPassword) {
    throw new Error('Invalid password!');
  }
  
  const data = { email, password };
  const { error } = await supabase.auth.signUp(data);

  if (error) {
    throw new Error('Invalid credentials!');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}



export async function logout() {
    const supabase = await createClient()
  
    const { error } = await supabase.auth.signOut()
  
    if (error) {
      redirect('/error')
    }
  
    revalidatePath('/' , 'layout')
    redirect('/')
  }
