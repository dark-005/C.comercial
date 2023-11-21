<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class locales extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['id','nombre','tipo','subtipo','representante','contacto','estado'];
}
