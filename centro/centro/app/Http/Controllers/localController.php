<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\locales;

class localController extends Controller
{
    public function getLocal(){
        return response()->json(locales::all(),200);
    }

    public function getLocalbyid($id){
        $local = locales::find($id);

        return response()->json($local::find($id), 200);
    }
    public function addlocal(Request $request){
        $local = locales::create($request->all());
        return response($local,201);
    }
    public function updatelocal(Request $request, $id){
        $local = locales::find($id);
        if(is_null($local)){
            return response()->json(['message' => 'local no encontrado'],404);
        }
        $local->update($request->all());
        return response($local,200);
    }
    public function deletelocal(Request $request , $id){
        $local = locales::find($id);
        if(is_null($local)){
            return response()->json(['message' => 'local no encontrado'],404);
        }
        $local->delete();
        return response()->json(null,204);
    }
}
