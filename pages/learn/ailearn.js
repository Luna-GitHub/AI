import Head from "next/head";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
const AIlearn = () => {
    
        return (
            <div>
                <div className="body">
                    <div className="top">
                        <a href="#"><img className="logo" src="https://ailearning.edu.vn/content/img/logo/logo.png"/></a>
                        <div className="thanhngang">
                        <a href="#">Trang chủ</a>
                        <a href="#">Khoá học</a>
                        <a href="#">Liên hệ</a>
                        <a href="#">Admin</a>
                        <a href="#">Đăng nhập</a>
                        </div>
                    </div>
                    <div className="phong">
                        <img src="https://ailearning.edu.vn/content/img/home/breadcumb.png"/>
                        <div className="thanhdoc">
                            <li style={{marginLeft:"120px"}}><a href="#">TRANG CHỦ</a></li>
                            <li><a href="#">KHOÁ HỌC</a></li>
                            <li>CHI TIẾT KHOÁ HỌC</li>
                        </div>
                    </div>

                </div>
            </div>
        )
}

export default AIlearn;