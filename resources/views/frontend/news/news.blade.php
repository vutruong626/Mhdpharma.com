@extends('frontend.master')
@section('content')
<div id="page-title-bar" class="page-title-bar">
    <div class="container">
        <div class="wrap w-100 d-flex align-items-center">
            <div class="page-title-bar-inner d-flex flex-column w-100">
                <div class="page-header">
                    <h1 class="page-title typo-heading color-vt">Tin tức</h1>
                </div>
                <div class="breadcrumb">
                    <!-- Breadcrumb NavXT 6.3.0 -->
                    <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                            title="Go to Medicor." href="https://demo2.wpopal.com/medicor" class="home"
                            aria-current="page"><span property="name">Trang chủ</span></a>
                        <meta property="position" content="1"></span> </div>
            </div>
        </div>
    </div>
</div>
<div class="site-content-contain" style="margin-top: 100px;">
    <div id="content" class="site-content">
        <div class="wrap">
            <div id="primary" class="content-area">
                <main id="main" class="site-main ajax-showdata">
                    @foreach($news as $vt_news)
                    <article id="post-65"
                        class="post-65 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-blog tag-medicine tag-products tag-tips">
                        <div class="post-inner">
                            <div class="post-thumbnail">
                                <a href="{{route('news_detail',$vt_news->slug)}}">

                                    <img width="800" height="600" src="{{asset('storage/'.$vt_news->image)}}"
                                        class="attachment-medicor-featured-image-full size-medicor-featured-image-full wp-post-image wp-post-image"
                                        alt="" srcset="{{asset('storage/'.$vt_news->image)}} 800w"
                                        sizes="(max-width: 800px) 100vw, 800px" /> 
                                </a>
                            </div><!-- .post-thumbnail -->
                            <header class="entry-header">
                                <h2 class="entry-title">
                                    <a href="{{route('news_detail',$vt_news->slug)}}"
                                        rel="bookmark">{{$vt_news->title}}</a>
                                </h2>
                                <div class="entry-meta">
                                    <div class="meta-inner">
                                        <span class="byline">
                                            <span class="author vcard">
                                                <a class="url fn n" href="">Bởi quản trị viên</a>
                                            </span>
                                        </span>
                                        <span class="posted-on">
                                            <a href="" rel="bookmark">
                                                <time class="entry-date published" datetime="{{$vt_news->created_at}}">{{$vt_news->created_at}}</time>
                                                <time class="updated" datetime="{{$vt_news->updated_at}}">{{$vt_news->updated_at}}</time>
                                            </a>
                                        </span>
                                    </div>
                                </div><!-- .entry-meta -->
                            </header><!-- .entry-header -->
                            <div class="entry-content">
                                <p>{!! $vt_news->excerpt !!}</p>
                            </div><!-- .entry-content -->
                        </div>
                    </article><!-- #post-## -->
                    @endforeach
                    <!-- <nav class="navigation pagination" role="navigation">
                        <h2 class="screen-reader-text">Posts navigation</h2>
                        <div class="nav-links"><span aria-current='page' class='page-numbers current'><span
                                    class="meta-nav screen-reader-text">Page </span>1</span>
                            <a class='page-numbers' href=''><span class="meta-nav screen-reader-text">Page </span>2</a>
                            <a class="next page-numbers" href=""><span class="screen-reader-text">Next</span><span
                                    class="opal-icon-chevron-right"></span></a></div>
                    </nav> -->
                </main><!-- #main -->
            </div><!-- #primary -->
            <aside id="secondary" class="widget-area" role="complementary">
                <div class="inner">
                    <section id="woocommerce_product_categories-2" class="widget woocommerce widget_product_categories">
                        <h2 class="widget-title">Danh mục tin tức</h2>
                        <ul class="product-categories  ">
                            @foreach($categories as $vt_categories)
                            <li class="cat-item cat-item-111 elementor-element elementor-element-4207434 elementor-widget elementor-widget-accordion item-click"
                                data-id="{{$vt_categories->id}}" data-id="4207434" data-element_type="widget"
                                data-widget_type="accordion.default"
                                style="    margin-bottom: 0px;">
                                <div id="elementor-tab-title-6921" class="elementor-tab-title crop-vt" tabindex="6921"
                                    style="cursor: pointer;">

                                    {{$vt_categories->name}}
                                </div>
                            </li>
                            @endforeach
                        </ul>
                    </section>
                    <!-- <section id="categories-4" class="widget widget_categories">
                        <h2 class="widget-title">Danh mục tin tức</h2>
                        <ul>
                            <li class="cat-item cat-item-76"><a href="../category/fashion/index.html">Fashion</a>
                            </li>
                            <li class="cat-item cat-item-73"><a
                                    href="../category/inspiration/index.html">Inspiration</a>
                            </li>
                            <li class="cat-item cat-item-72"><a href="../category/lifestyle/index.html">Lifestyle</a>
                            </li>
                            <li class="cat-item cat-item-75"><a href="../category/shopping/index.html">Shopping</a>
                            </li>
                            <li class="cat-item cat-item-1"><a
                                    href="../category/uncategorized/index.html">Uncategorized</a>
                            </li>
                        </ul>
                    </section> -->
                    <section id="recent-posts-3" class="widget widget_recent_entries">
                        <h2 class="widget-title">Sản Phẩm</h2>
                        <ul>
                            @foreach($shop as $vt_shop)
                            <li class="item-recent-post">
                                <div class="thumbnail-post">
                                    <a href="{{route('news_detail',$vt_shop->slug)}}">
                                        <img onload="Wpfcll.r(this,true);" src="{{asset('storage/'. $vt_shop->image)}}"
                                            width="800" height="600"
                                            data-wpfc-original-src="{{asset('storage/'. $vt_shop->image)}}"
                                            class="attachment-medicor-thumbnail size-medicor-thumbnail wp-post-image wp-post-image"
                                            alt=""
                                            data-wpfc-original-srcset="{{asset('storage/'. $vt_shop->image)}} 800w"
                                            sizes="(max-width: 800px) 100vw, 800px" />
                                    </a>
                                </div>
                                <div class="title-post">
                                    <a href="{{route('news_detail',$vt_shop->slug)}}">{{$vt_shop->seo_title}}</a>
                                    <span class="post-date">{{$vt_shop->created_at}}</span>
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).on('click', '.item-click', function() {
    //active or remove menu
    $(".item-click").removeClass("active-menu");
    $(this).addClass("active-menu");
    var id = $(this).attr('data-id');
    $.ajax({
        url: '/getCategoryNews/' + id,
        type: "GET",
        dataType: 'html',
        async: false,
        data: {

        },
        success: function(res) {
            data = JSON.parse(res);
            console.log(data);
            var element = '';
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    var slug = data[i].slug;
                    element += 
                    '<article id="post-65" class="post-65 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-blog tag-medicine tag-products tag-tips">' +
                        '<div class="post-inner">'+
                            '<div class="post-thumbnail">'+
                                '<a href="{{ route('news_detail','') }}/'+ slug +'">'+
                                    '<img width="800" height="600" src="storage/' + data[i].image +
                                    '" class="attachment-medicor-featured-image-full size-medicor-featured-image-full wp-post-image wp-post-image" alt=""  />'+
                                '</a>'+

                            '</div>'+ 
                            '<header class="entry-header">'+
                                '<h2 class="entry-title">'+
                                    '<a href="{{ route('news_detail','') }}/'+ slug +'" rel="bookmark">'+ data[i].title +
                                    '</a>'+
                                '</h2>'+
                                '<div class="entry-meta">'+
                                    '<div class="meta-inner">'+
                                        '<span class="byline">'+
                                            '<span class="author vcard">'+
                                                '<a class="url fn n" href="">'+ 'Bởi quản trị viên'+
                                                '</a>'+
                                            '</span>'+
                                        '</span>'+
                                        '<span class="posted-on">'+
                                            '<a href="{{ route('news_detail','') }}/'+ slug +'" rel="bookmark">'+
                                                '<time class="entry-date published" datetime="'+data[i].created_at+'">'+data[i].created_at +
                                                '</time>'+
                                                '<time class="updated" datetime="'+ data[i].updated_at+'">' +
                                                '</time>'+
                                            '</a>'+
                                        '</span>'+
                                    '</div>'+
                                '</div>' +
                            '</header>'+
                            '<div class="entry-content">'+
                                '<p>'+  data[i].excerpt +
                                '</p>'+
                            '</div>'+
                        '</div>'+
                    '</article>';

                }
                $('.ajax-showdata').html(element);

            }

        }

    });
    console.log($(this).attr('data-id'));
});

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
</script>
<style type="text/css">
/* Style the active class, and buttons on mouse-over */
.active,
.btn:hover,
.active-menu {
    background-color: #fff;
    color: #f6b823;
}

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

@media (min-width: 769px) {

    body.tax-product_cat.opal-content-layout-2cl #secondary,
    body.tax-product_cat.opal-content-layout-2cr #secondary,
    body.post-type-archive-product.opal-content-layout-2cl #secondary,
    body.post-type-archive-product.opal-content-layout-2cr #secondary {
        flex: 0 0 300px;
        max-width: 300px;
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