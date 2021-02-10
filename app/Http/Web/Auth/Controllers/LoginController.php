<?php

namespace App\Http\Web\Auth\Controllers;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Inertia\Inertia;

class LoginController
{
    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Show the application's login form.
     *
     * @return \Inertia\Response
     */
    public function showLoginForm()
    {
        return Inertia::render('auth/pages/login');
    }

    /**
     * {@inheritDoc}
     */
    public function username()
    {
        return 'username';
    }
}
