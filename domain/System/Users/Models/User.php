<?php

namespace Domain\System\Users\Models;

use Illuminate\Foundation\Auth\User as BaseUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Support\Illuminate\Database\Eloquent\Concerns\Unguarded;

class User extends BaseUser
{
    use HasFactory,
        Unguarded;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'system_users';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
}
