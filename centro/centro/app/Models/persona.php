<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class persona extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['id','nombre','contacto','contrasena','email','rol'];
}
