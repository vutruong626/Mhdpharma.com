<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Traits\Translatable;

class CategoryPage extends Model
{
    use Translatable;

    protected $translatable = ['slug', 'name'];

    protected $table = 'category_pages';

    protected $fillable = ['slug', 'name'];

    public function pages() 
    {
        return $this->hasMany(Voyager::modelClass('Page'))
            ->published()
            ->orderBy('created_at', 'DESC');
    }

    public function parentId()
    {
        return $this->belongsTo(self::class);
    }
}
