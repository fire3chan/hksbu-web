import React from 'react';
import '../css/aboutUs.css';

class AboutUs extends React.Component {

    render() {
        return (
            <div className="about-us">
                <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-7 vc_col-xs-12">
                    <div class="vc_column-inner">
                        <div class="wpb_wrapper">
                            <div class="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_left-to-right left-to-right wpb_start_animation animated">
                                <div class="wpb_wrapper">
                                    <div class="title-xlarge">
                                        <span >About</span>
                                    </div>
                                </div>
                            </div>
                            <div class="clearboth"></div>
                            <div class="ct-divider " ></div>
                            <div class="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_left-to-right left-to-right wpb_start_animation animated">
                                <div class="wpb_wrapper">
                                    <div class="title-h3 light">
                                        <span >Why choosing Crypton?</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                                <div class="wpb_wrapper">
                                    <div class="video-button">
                                        <a href="#link" class="fancybox">
                                            <img src="https://codex-themes.com/themes/cryption-dark/wp-content/uploads/sites/13/2018/09/16-1.png" />
                                        </a>
                                    </div>
                                    <div id="link" style={{ display: "none" }}>
                                        <iframe src="https://player.vimeo.com/video/186251146?title=0&amp;byline=0&amp;portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gap-column wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-5 vc_col-xs-12"><div class="vc_column-inner vc_custom_1525349293450"><div class="wpb_wrapper"><div class="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_right-to-left right-to-left wpb_start_animation animated"><div class="wpb_wrapper"><div class="title-h3 light"><span style={{ color: '#00ece2' }}>Automatic matching of buyers &amp; sellers via unique artificial intelligence approach.</span></div></div></div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-12 vc_col-md-12 vc_col-xs-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="clearboth"></div><div class="ct-divider "></div><div class="wpb_text_column wpb_content_element "><div class="wpb_wrapper"><p><span >Crypton is a block chain based marketplace, where buyers &amp; sellers meet to carry out operations involving digital goods &amp; assets with crypto currency transactions. The unique advantage here is an automatic matching of users, basing on artificial intelligence approach. It is a first ever artificial intelligence marketplace in the world, combining traditional and smart contract, block chain, future oriented ideas of connecting people and performing operations by analyzing users preferences.</span></p></div></div><div class="clearboth"></div><div class="ct-divider " ></div></div></div></div></div>


        );
    }
}

export default AboutUs;
