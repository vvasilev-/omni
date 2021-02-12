<?php

use Illuminate\Support\Facades\Route;
use App\Http\Web\Auth\Controllers\LoginController;
use App\Http\Web\Auth\Controllers\LogoutController;
use App\Http\Web\Dashboard\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/**
 * Authentication
 */
Route::get('/auth/login', [LoginController::class, 'showLoginForm'])
    ->middleware(['guest'])
    ->name('auth.login');

Route::post('/auth/login', [LoginController::class, 'login'])
    ->middleware(['guest']);

Route::post('/auth/logout', [LogoutController::class, 'logout'])
    ->middleware(['auth'])
    ->name('auth.logout');

/**
 * Dashboard
 */
Route::redirect('/', '/dashboard');

Route::get('/dashboard', DashboardController::class)
    ->middleware(['auth'])
    ->name('dashboard');
