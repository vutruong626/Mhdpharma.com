<?php

/*
|--------------------------------------------------------------------------
| chonj ngon ngu cho trang web
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('locale/{locale}', function ($locale){
    Session::put('locale', $locale);
    return redirect()->back();
});

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

Route::get('/test', function () {
    return view('welcome');
});

Route::prefix('/')->group(function () {
    Route::get('/','Frontend\\PagesController@index')->name('index');
    Route::get('/gioi-thieu','Frontend\\PagesController@getAbout')->name('about');
    Route::get('/dich-vu','Frontend\\PagesController@getService')->name('service');
    Route::get('/lien-he','Frontend\\PagesController@getContact')->name('contact');
    Route::get('/vt-test','Frontend\\PagesController@gettest')->name('test');
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

    Route::get('/san-pham.html','Frontend\\ProductController@getShop')->name('shop');
    Route::get('/getCategoryProduct/{show_category_product}','Frontend\\ProductController@getCategoryProduct')->name('category_product');
    
    Route::get('/san-pham/{slug}','Frontend\\ProductController@getShopDetail')->name('shop_detail');

    Route::get('/tim-kiem','Frontend\\ProductController@getSearch')->name('search');
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

    Route::get('/tin-tuc.html','Frontend\\NewsController@getNews')->name('news');
    Route::get('/getCategoryNews/{show_category_news}','Frontend\\NewsController@getCategoryNews')->name('category_news');

    Route::get('/tin-tuc/{slug}','Frontend\\NewsController@getNewsDetail')->name('news_detail');


});
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
