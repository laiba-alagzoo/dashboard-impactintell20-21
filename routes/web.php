<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'DashboardController@DashboardView')->name('dashboard');
Route::get('/sectors/halal-food', 'DashboardController@HalalFoodView')->name('halal-food');
Route::get('/sectors/pharma', 'DashboardController@PharmaView')->name('pharma');
Route::get('/sectors/cosmetics', 'DashboardController@CosmeticsView')->name('cosmetics');
Route::get('/sectors/fashion', 'DashboardController@FashionView')->name('fashion');
Route::get('/sectors/media', 'DashboardController@MediaView')->name('media');
Route::get('/sectors/travel', 'DashboardController@TravelView')->name('travel');
Route::get('/sectors/finance', 'DashboardController@FinanceView')->name('finance');

