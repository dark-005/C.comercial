<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/users', 'App\Http\Controllers\UserController@index');
Route::post('/users', 'App\Http\Controllers\UserController@store');
Route::put('/users/{id}', 'App\Http\Controllers\UserController@update');
Route::delete('/users/{id}', 'App\Http\Controllers\UserController@destroy');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//buscar todos los locales 
Route::get('locales', 'App\Http\Controllers\localController@getLocal');

//buscar local especifico por id
Route::get('locales/{id}', 'App\Http\Controllers\localController@getLocalbyid');

//crear local
Route::post('addlocal', 'App\Http\Controllers\localController@addlocal');

//actualizar local
Route::put('updatelocal/{id}', 'App\Http\Controllers\localController@updatelocal');

//borrar local
Route::delete('deletelocal/{id}', 'App\Http\Controllers\localController@deletelocal');

#--------------------------------------------------------------------------------------

//buscar todos las personas 
Route::get('persona', 'App\Http\Controllers\personacontroller@getpersona');

//buscar persona especifico por id
Route::get('persona/{id}', 'App\Http\Controllers\personacontroller@getpersonabyid');

//crear local
Route::post('addpersona', 'App\Http\Controllers\personacontroller@addpersona');

//actualizar local
Route::put('updatepersona/{id}', 'App\Http\Controllers\personacontroller@updatepersona');

//borrar local
Route::delete('deletepersona/{id}', 'App\Http\Controllers\personacontroller@deletepersona');