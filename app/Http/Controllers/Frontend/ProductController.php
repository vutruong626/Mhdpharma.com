<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Category;
use DB;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getShop(Request $request)
    {
        
        $shop = Post::orderBy('id','DESC')->get();
        $category = Category::all();
        return view('frontend.products.shop',compact('shop','category'));
    }
     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getCategoryProduct(Request $request,$show_category_product)
    {
        // return 123456;
        if ($show_category_product > 0) {
                return Post::where('category_id', $show_category_product)->with('category')->get();
            }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getShopDetail(Request $request,$slug)
    {
        $detail_shop = Post::where('slug',$slug)->with('category')->first();
        //dd($detail_shop->category->parent_id);
        //$shop = Post::where('category_id',$detail_shop->category_id)->orderBy('id','DESC')->skip(0)->take(4)->get();
        $shop = collect([]);
        //dd($detail_shop->category_id);
        $categories = Category::where('parent_id',$detail_shop->category->parent_id)->get();
        
        foreach($categories as $item_category){
            
            $post = Post::where('category_id',$item_category->id)->orderBy('id','DESC')->get();
            $shop = $shop->concat($post);
        }
        // dd($shop);
        return view('frontend.products.shopdetail',compact('detail_shop','shop'));
    }

   

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getSearch(Request $request)
    {
        $search = DB::table('posts')->orWhere('seo_title', 'like', '%' . $request->seo_title . '%')
                        ->orderBy('id', 'desc')->get();
        // ->where([
        //     ['name','like','%' . $request->content . '%'],
        //     ['title','like','%' . $request->content . '%']
        //   ])
            
        return view('frontend.products.search',compact('search'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}