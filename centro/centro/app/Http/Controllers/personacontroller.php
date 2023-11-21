<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\persona;

class personacontroller extends Controller
{
    public function getpersona(){
        return response()->json(persona::all(),200);
    }

    public function getpersonabyid($id){
        $persona = persona::find($id);

        return response()->json($persona::find($id), 200);
    }
    public function addpersona(Request $request){
        $persona = persona::create($request->all());
        return response($persona,201);
    }
    public function updatepersona(Request $request, $id){
        $persona = persona::find($id);
        if(is_null($persona)){
            return response()->json(['message' => 'persona no encontrado'],404);
        }
        $persona->update($request->all());
        return response($persona,200);
    }
    public function deletepersona(Request $request , $id){
        $persona = persona::find($id);
        if(is_null($persona)){
            return response()->json(['message' => 'persona no encontrado'],404);
        }
        $persona->delete();
        return response()->json(null,204);
    }
}
