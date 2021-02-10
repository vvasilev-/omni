<?php

namespace Support\Illuminate\Database\Eloquent\Concerns;

trait Unguarded
{
    /**
     * Initialize the trait for an instance.
     *
     * @return void
     */
    public function initializeUnguarded()
    {
        self::$unguarded = true;

        $this->guarded = [];
    }
}
