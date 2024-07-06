<?php
namespace App\Http\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Auth;

class accountService {

    public function fetch_information($request)
    {
        $data = Auth::user();
        return [
            "success" => true,
            "data" => $data
        ];
    }

    public function update_information($request)
    {
        $email = Auth::user()->email;
        $name = $request->name;

        User::where("email", $email)->update(["name" => $name]);

        return [
            "success" => true,
            "message" => "Successfully updated"
        ];

    }

    public function create($request)
    {
        $success = false;
        $account_check = User::where("email", $request->email)->first();
        $message = 'Account already exists.';
        if(empty($account_check))
        {
            // CREATE ACCOUNT AND SAVE GENERATED USER AND PASSWORD

            User::create([
                "name"          => $request->name,
                "email"         => $request->email,
                "user_type"     => $request->user_type,
                "password"  => Hash::make($request->password)
            ]);

            $success = true;
            $message = "Successfully created";
        }

        return array(
            "success"   => $success,
            "message"   => $message
        );
    }
}