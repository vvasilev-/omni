<?php

namespace App\Http\Web\Dashboard\Controllers;

use Inertia\Inertia;

class DashboardController
{
    /**
     * Handle the incoming request.
     *
     * @return void
     */
    public function __invoke()
    {
        return Inertia::render('dashboard/pages/dashboard');
    }
}
