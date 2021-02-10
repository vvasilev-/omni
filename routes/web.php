<?php

use Illuminate\Support\Facades\Route;
use App\Http\Web\Auth\Controllers\LoginController;

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

Route::get('/', fn() => 'Welcome')
    ->middleware(['auth']);

Route::get('/auth/login', [LoginController::class, 'showLoginForm'])
    ->middleware(['guest'])
    ->name('auth.login');

Route::post('/auth/login', [LoginController::class, 'login'])
    ->middleware(['guest']);
