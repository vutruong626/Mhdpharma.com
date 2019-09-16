@extends('frontend.master')
@section('content')
<div id="page-title-bar" class="page-title-bar">
    <div class="container">
        <div class="wrap w-100 d-flex align-items-center">
            <div class="page-title-bar-inner d-flex flex-column w-100">
                <div class="page-header">
                    <h1 class="page-title typo-heading color-vt">Sản Phẩm</h1>
                </div>
                <div class="breadcrumb">
                    <!-- Breadcrumb NavXT 6.3.0 -->
                    <span property="itemListElement" typeof="ListItem"><a property="item" typeof="WebPage"
                            title="Go to Medicor." href="/" class="home" aria-current="page"><span property="name">Trang
                                chủ</span></a>
                        <meta property="position" content="1"></span> </div>
            </div>
        </div>
    </div>
</div>
<div class="site-content-contain" style="margin-top: 100px;">
    <div id="content" class="site-content">
        <div class="wrap">
            <div id="primary" class="content-area">
                <main id="main" class="site-main" role="main" style="width: 1170px;">
                    <header class="woocommerce-products-header">
                    </header>
                    <div class="osf-sorting-wrapper">
                        <div class="osf-sorting">
                            <div class="osf-sorting-group col-lg-12 col-sm-12">
                            </div>

                        </div>
                    </div>

                    <div class="woocommerce-notices-wrapper"></div>
                    <div class="columns-3">
                        <ul class="products columns-3 ajax-showdata">
                            @if(count($search)==0)
                            <div class="col-md-12">
                                Không tìm thấy sản phẩm..
                            </div>
                            @endif
                            @foreach($search as $vt_search)
                            <li
                                class="list_product product type-product post-2840 status-publish first instock product_cat-cough-cold-flu has-post-thumbnail shipping-taxable purchasable product-type-simple">
                                <div class="product-block">
                                    <div class="product-transition">
                                        <div class="product-image">
                                            <img width="400" height="534" src="{{asset('storage/'.$vt_search->image)}}"
                                                class="attachment-shop_catalog size-shop_catalog wp-post-image"
                                                alt="{{$vt_search->seo_title}}" />
                                        </div><a href="{{route('shop_detail',$vt_search->slug)}}"
                                            class="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                                    </div>
                                    <h3 class="woocommerce-loop-product__title"><a
                                            href="{{route('shop_detail',$vt_search->slug)}}">{{$vt_search->seo_title}}</a>
                                    </h3>

                                    <div class="woocommerce-product-details__short-description"
                                        style="font-size: 12px;line-height: 15px;">
                                        <p>{!! $vt_search->excerpt !!}</p>
                                    </div>
                                    <div class="woocommerce-product-details__short-description"
                                        style="font-size: 12px;"></div>
                                    <div class="posted_in">{{$vt_search->title}}</div>
                                </div>
                            </li>
                            @endforeach
                        </ul>

                    </div>
                </main><!-- #main -->
            </div><!-- #primary -->
        </div>
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

/* Style the buttons */
.btn {
    border: none;
    outline: none;
    padding: 10px 16px;
    background-color: #ffffff;
    cursor: pointer;
    font-size: 18px;
}

/* Style the active class, and buttons on mouse-over */
.active,
.btn:hover,
.active-menu {
    background-color: #fff;
    color: #f6b823;
}
</style>
@endsection