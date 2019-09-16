<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\CategoryPage;
use App\Models\Post;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getNews(Request $request)
    {
        
        
        $news = Page::orderBy('id', 'DESC')->get();
        $categories = CategoryPage::orderBy('id', 'DESC')->get();
        $shop = Post::orderBy('id','DESC')->get();
        // dd($news);
        return view('frontend.news.news',compact('news','categories','shop'));
    }

    /**
     * getCategoryNews a newly created resource in Ajax.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getCategoryNews($show_category_news)
    {
        if ($show_category_news > 0) {
            return Page::where('category_pages_id', $show_category_news)->get();
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getNewsDetail(Request $request,$slug)
    {
        // dd($slug);
        $news = Page::orderBy('id', 'DESC')->get();
        $detail_news = Page::where('slug', $slug)->first();
        return view('frontend.news.new-detail',compact('detail_news','news'));
    }

}
