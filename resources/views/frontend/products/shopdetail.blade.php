@extends('frontend.master')
@section('head')
<title>{{ !empty($detail_shop->seo_title)?$detail_shop->seo_title:$detail_shop->title }}</title>
<meta name="description" content="{{ $detail_shop->meta_description }}" />
<meta name="keywords" content="{{ $detail_shop->meta_keywords }}" />
@parent
@endsection
@section('content')
<div id="page-title-bar" class="page-title-bar">
    <div class="container">
        <div class="wrap w-100 d-flex align-items-center">
            <div class="page-title-bar-inner d-flex flex-column w-100">
                <div class="breadcrumb">
                    <!-- Breadcrumb NavXT 6.3.0 -->
                    <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                            title="Go to Medicor." href="/" class="home"><span property="name">Trang chủ</span></a>
                        <meta property="position" content="1"></span> | <span property="itemListElement"
                        typeof="ListItem"><a property="item" typeof="WebPage" title="đi tới Sản phảm"
                            href="{{route('shop')}}" class="post post-product-archive"><span property="name">Sản
                                phẩm</span></a>
                        <meta property="position" content="2"></span> | <span property="itemListElement"
                        typeof="ListItem">
                        <a property="item" typeof="WebPage" title="Go to the Cough, Cold &amp; Flu Category archives."
                            href="" class="taxonomy product_cat" aria-current="page">
                            <span property="name">{{$detail_shop->title}}</span></a>
                        <meta property="position" content="4"></span> </div>
            </div>
        </div>
    </div>
</div>
<div class="site-content-contain">
    <div id="content" class="site-content">
        <div class="wrap">

            <main id="main" class="site-main" role="main" style="margin: 50px 0px 0px 0px;">
                <div class="woocommerce-notices-wrapper"></div>
                <div id="product-2840"
                    class="product type-product post-2840 status-publish first instock product_cat-cough-cold-flu has-post-thumbnail shipping-taxable purchasable product-type-simple">
                    <div class="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images osf_no_image_gallery"
                        data-columns="4" style="opacity: 1; transition: opacity 0.25s ease-in-out 0s;"><a href="#"
                            class="woocommerce-product-gallery__trigger">🔍</a>
                        <figure class="woocommerce-product-gallery__wrapper">
                            <div data-thumb="{{asset('storage/'.$detail_shop->image)}}" data-thumb-alt=""
                                class="woocommerce-product-gallery__image"
                                style="position: relative; overflow: hidden;"><a
                                    href="{{asset('storage/'.$detail_shop->image)}}"><img width="600" height="656"
                                        src="{{asset('storage/'.$detail_shop->image)}}" class="wp-post-image" alt=""
                                        title="1-13.jpg" data-caption=""
                                        data-src="{{asset('storage/'.$detail_shop->image)}}"
                                        data-large_image="{{asset('storage/'.$detail_shop->image)}}"
                                        data-large_image_width="800" data-large_image_height="875"
                                        srcset="{{asset('storage/'.$detail_shop->image)}} 600w"
                                        sizes="(max-width: 600px) 100vw, 600px"></a><img role="presentation"
                                    alt="{{$detail_shop->title}}" src="{{asset('storage/'.$detail_shop->image)}}"
                                    class="zoomImg"
                                    style="position: absolute; top: -37.0623px; left: -37.3621px; opacity: 0; width: 800px; height: 875px; border: none; max-width: none; max-height: none;">
                            </div>
                        </figure>
                    </div>
                    <div class="summary entry-summary">
                        <div class="inner">
                            <h1 class="product_title entry-title">{{$detail_shop->seo_title}}</h1>
                            <!-- <p class="price"><span class="woocommerce-Price-amount amount"><span
                                            class="woocommerce-Price-currencySymbol">$</span>119.83</span></p> -->
                            <div class="woocommerce-product-details__short-description">
                                <p>{!! $detail_shop->excerpt !!}</p>
                            </div>
                        </div>
                    </div>
                    <div class="woocommerce-tabs wc-tabs-wrapper">
                        <ul class="tabs wc-tabs" role="tablist">
                            <li class="description_tab active" id="tab-title-description" role="tab"
                                aria-controls="tab-description">
                                <a href="#tab-description">Thông tin chi tiết</a>
                            </li>

                        </ul>
                        <div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                            id="tab-description" role="tabpanel" aria-labelledby="tab-title-description"
                            style="display: block;">

                            <p>{!!$detail_shop->body!!}</p>
                        </div>

                    </div>
                    <div class="columns-4">
                        <section class="related products">
                            <h2>Những sản phẩm liên quan</h2>
                            <ul class="products columns-4">
                                @foreach($shop as $vt_shop)
                                @if($vt_shop->id != $detail_shop->id)
                                <li
                                    class="product type-product post-2842 status-publish first instock product_cat-cough-cold-flu has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                    <div class="product-block">


                                        <div class="product-transition">
                                            <div class="product-image">
                                                <img width="400" height="534"
                                                    src="{{asset('storage/'.$vt_shop->image)}}"
                                                    class="attachment-shop_catalog size-shop_catalog wp-post-image"
                                                    alt=""></div><a href="{{route('shop_detail',$vt_shop->slug)}}"
                                                class="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                                        </div>
                                        <h3 class="woocommerce-loop-product__title"><a
                                                href="{{route('shop_detail',$vt_shop->slug)}}">{{$vt_shop->seo_title}}</a>
                                        </h3>
                                        <div class="posted_in"><a href="" rel="tag">{{$vt_shop->title}}</a>
                                        </div>
                                    </div>
                                </li>
                                @endif
                                @endforeach
                            </ul>
                        </section>
                    </div>
                </div>
            </main><!-- #main -->

        </div>
    </div><!-- #content -->
</div>
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
</style>
@endsection