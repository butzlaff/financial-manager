'use client';

export default function Home() {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get('email') as string;
    const password = form.get('password') as string;
    console.log(email, password);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('token', token);
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-64 border-lime-500'>
      <form className='flex flex-col space-y-4' onSubmit={handleLogin}>
        <div>
          <label className='flex flex-col'>
            <span>Email</span>
            <input
              type='email'
              name='email'
              className='p-2 rounded-md text-black'
            />
          </label>
        </div>
        <div>
          <label className='flex flex-col'>
            <span>Password</span>
            <input
              type='password'
              name='password'
              className='p-2 rounded-md text-black'
            />
          </label>
        </div>
        <div className='flex flex-col space-y-2'>
          <button type='submit' className='bg-green-500 mt-2 rounded-lg p-2'>
            Entrar
          </button>
          <button type='button' className='bg-blue-500 mt-2 rounded-lg p-2'>
            Registrar
          </button>
        </div>
      </form>
    </main>
  );
}
