<?php

namespace App\Models;

use TCG\Voyager\Facades\Voyager;
use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;
class Category extends Model
{
    use Translatable;

    protected $translatable = ['slug', 'name','parent_id'];

    protected $table = 'categories';

    protected $fillable = ['slug', 'name','parent_id'];

    public function posts() 
    {
        return $this->hasMany(Voyager::modelClass('Post'))
            ->published()
            ->orderBy('created_at', 'DESC');
    }

    public function parentId()
    {
        return $this->belongsTo(self::class);
    }
}
