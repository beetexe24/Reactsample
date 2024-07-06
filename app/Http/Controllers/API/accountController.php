<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Services\accountService;
use App\Http\Requests\updateInformationRequest;
use App\Http\Requests\createaccountRequest;

class accountController extends Controller
{
    
    protected function fetch_information(Request $request)
    {
        return (new accountService)->fetch_information($request);
    }

    protected function update_information(updateInformationRequest $request)
    {
        return (new accountService)->update_information($request);
    }

    protected function create(createaccountRequest $request)
    {
        return (new accountService)->create($request);
    }
}
