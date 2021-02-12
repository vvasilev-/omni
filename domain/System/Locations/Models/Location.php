<?php

namespace Domain\System\Locations\Models;

use Illuminate\Database\Eloquent\Model;
use Support\Illuminate\Database\Eloquent\Concerns\Unguarded;

class Location extends Model
{
    use Unguarded;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'system_locations';
}
