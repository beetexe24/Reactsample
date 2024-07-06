<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\authController;
use App\Http\Controllers\API\accountController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post("/logout", [authController::class, "logout"])->name("logout");
    Route::get("/fetch_information", [accountController::class, "fetch_information"]);
    Route::post("/update_information", [accountController::class, "update_information"]);
}); 

Route::post("/authenticate", [authController::class, "login"])->name("login");
Route::post("/create-account", [accountController::class, "create"])->name("create_account");
