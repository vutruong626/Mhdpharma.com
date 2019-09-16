@extends('frontend.master')
@section('content')
<div id="page-title-bar" class="page-title-bar">
    <div class="container">
        <div class="wrap w-100 d-flex align-items-center">
            <div class="page-title-bar-inner d-flex flex-column w-100">
                <div class="breadcrumb">
                    <!-- Breadcrumb NavXT 6.3.0 -->
                    <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                            title="Go to Medicor." href="/" class="home"><span property="name">Trang chủ</span></a>
                        <meta property="position" content="1"></span> &gt; <span property="itemListElement"
                        typeof="ListItem"><a property="item" typeof="WebPage" title="Đi đến tin tức."
                            href="{{route('news')}}" class="post-root post post-post"><span
                                property="name" class="color-vt">Tin tức</span></a>
                        <meta property="position" content="2"></span> &gt; <span property="itemListElement"
                        typeof="ListItem"><a property="item" typeof="WebPage"
                            title="Go to the Fashion category archives." href=""
                            class="taxonomy category" aria-current="page"><span property="name">{{$detail_news->title}}</span></a>
                        <meta property="position" content="3"></span> </div>
            </div>
        </div>
    </div>
</div>
<div class="site-content-contain" style="    margin-top: 100px;">
    <div id="content" class="site-content">
        <div class="wrap">
            <div id="primary" class="content-area">
                <main id="main" class="site-main">
                    <article id="post-64"
                        class="post-64 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion category-uncategorized">
                        <div class="post-inner">
                            <div class="post-thumbnail">
                                <a href="index.html">
                                    <img width="800" height="600"
                                        src="{{asset('storage/'.$detail_news->image)}}"
                                        class="attachment-medicor-featured-image-full size-medicor-featured-image-full wp-post-image wp-post-image"
                                        alt="{{$detail_news->title}}"
                                        srcset="{{asset('storage/'.$detail_news->image)}} 800w"
                                        sizes="(max-width: 800px) 100vw, 800px" /> </a>
                            </div><!-- .post-thumbnail -->
                            <header class="entry-header">
                                <h1 class="entry-title">{{$detail_news->title}}</h1>
                                <div class="entry-meta">
                                    <div class="meta-inner"><span class="cat-links"><span
                                                class="screen-reader-text">Categories</span></span>     
                                        <span class="posted-on"><a href="index.html" rel="bookmark"><time
                                                    class="entry-date published"
                                                    datetime="2019-05-02T07:42:57+00:00">{{$detail_news->created_at}}</time><time class="updated"
                                                    datetime="2019-05-07T10:19:21+00:00">May 7,
                                                    2019</time></a></span></div>
                                </div><!-- .entry-meta -->
                            </header><!-- .entry-header -->
                            <div class="entry-content">
                                <p>{!!$detail_news->body!!}</p>
                            </div><!-- .entry-content -->
                            <footer class="entry-footer">
                                <div class="pbr-social-share">
                                    <span class="social-share-header">CHIA SẺ:</span> <a class="bo-social-facebook"
                                        href="http://www.facebook.com/sharer.php?s=100&amp;p[url]=https://demo2.wpopal.com/medicor/2019/05/02/fast-food-choices-influence-kids-soda-and-calorie-consumption/&amp;p[title]=Fast%20food%20choices%20influence%20kids%20soda%20and%20calorie%20consumption"
                                        target="_blank" title="Share on facebook">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                            </footer> <!-- .entry-footer -->
                        </div>
                    </article><!-- #post-## -->
                    
                </main> <!-- #main -->
            </div> <!-- #primary -->
            <aside id="secondary" class="widget-area" role="complementary">
                <div class="inner">
                    <section id="recent-posts-2" class="widget widget_recent_entries">
                        <h2 class="widget-title">Bài viết phổ biến</h2>
                        <ul>
                            @foreach($news as $vt_news)
                            <li class="item-recent-post">
                                <div class="thumbnail-post"><img width="800" height="600"
                                        src="{{asset('storage/'.$vt_news->image)}}"
                                        class="attachment-medicor-thumbnail size-medicor-thumbnail wp-post-image wp-post-image"
                                        alt=""
                                        srcset="{{asset('storage/'.$vt_news->image)}} 800w"
                                        sizes="(max-width: 800px) 100vw, 800px" /></div>
                                <div class="title-post">
                                    <a href="{{route('news_detail',$vt_news->slug)}}">{{$vt_news->title}}</a>
                                    <span class="post-date">{{$vt_news->created_at}}</span>
                                </div>
                            </li>
                            @endforeach
                        </ul>
                    </section>
                </div>
            </aside><!-- #secondary -->
        </div><!-- .wrap -->
    </div><!-- #content -->
</div><!-- .site-content-contain -->
<style type="text/css">
@media screen and (min-width:1200px) {

    .container,
    #content,
    .single-product .related.products,
    .single-product .up-sells.products,
    ul.elementor-nav-menu--dropdown.mega-containerwidth>li.mega-menu-item>.elementor {
        max-width: 1200px;
    }
}

@media screen and (min-width:1400px) {
    body.opal-layout-boxed {
        margin: 0px auto;
        width: 1400px;
    }

    body.opal-layout-boxed .elementor-section.elementor-section-stretched {
        max-width: 1400px;
    }
}

@media screen and (max-width: 1024px) {
    .elementor-1217 .elementor-element.elementor-element-e28060e>.elementor-element-populated {
        padding: 0px 0px 0px 0px;
    }
}

body.custom-background {
    background-color: #a9cedf;
    background-image: url("{{asset('images/Lee/Background-nen.jpg')}}");
    background-position: center top;
    background-size: auto;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

@media (min-width: 768px) {

    .order-md-first,
    body.opal-content-layout-2cl #secondary {
        order: 1;
    }
}
</style>
@endsection