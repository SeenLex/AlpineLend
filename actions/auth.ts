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
    redirect('/error?message=Invalid email address');
  }

  if (!password) {
    redirect('/error?message=Password is required');
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect('/error?message=Authentication failed');
  }

  revalidatePath('/', 'layout');
  redirect('/home');
}

export async function register(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;
  const surname = formData.get('surname') as string;

  if (
    !email ||
    !/^[a-zA-Z0-9]+@[a-zA-Z]+\.(com|net|org)$/.test(email) ||
    !/(yahoo|gmail|outlook)\.com$/.test(email)
  ) {
    redirect('/error?message=Invalid email address');
  }

  if (!name || !/^[a-zA-Z]+$/.test(name)) {
    redirect('/error?message=Invalid name');
  }
  if (!surname || !/^[a-zA-Z]+$/.test(surname)) {
    redirect('/error?message=Invalid surname');
  }

  if (
    !password ||
    password.length < 6 ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[^a-zA-Z0-9]/.test(password)
  ) {
    redirect('/error?message=Invalid password');
  }

  const data = { email, password };
  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error?message=Registration failed');
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
  
    revalidatePath('/')
    redirect('/login')
  }