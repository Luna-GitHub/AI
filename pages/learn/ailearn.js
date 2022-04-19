/* eslint-disable @next/next/no-sync-scripts */
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
                <a href="#">
                  <img className="logo" src="https://ailearning.edu.vn/content/img/logo/logo.png"/>
                </a>
                <div className="thanhngang">
                  <a href="#">Trang chủ</a>
                  <a href="#">Khoá học</a>
                  <a href="#">Liên hệ</a>
                  <a href="#">Admin</a>
                  <a href="#">Đăng nhập</a>
                </div>
              </div>
              <div className="phong">
                <img src="https://ailearning.edu.vn/content/img/home/breadcumb.png" style={{width:"100%", height:"300px"}}/>
                <div className="thanhdoc">
                  <li>
                    <a href="#">TRANG CHỦ</a>
                  </li>
                  <li>
                    <a href="#"> KHOÁ HỌC</a>
                  </li>
                  <li> CHI TIẾT KHOÁ HỌC</li>
                </div>
              </div>
              <div className="tcenter container">
                <div className="row">
                    <div className="bentrai col-sm-8">
                        <div className="hinhhat">
                            <img src="https://testingdn.com//public/upload/image/3oPI_images%20(2).jpg" />
                        </div>
                        <div className="sach">
                            <a href="#">
                                <ion-icon name="book-outline"></ion-icon> Bài học
                            </a>
                        </div>
                        <div className="tt">
                            <p>Không có bài tập nào trong khoá học !</p>
                        </div>
                    </div>
                    <div className="benphai col-sm-4">
                        <div className="tren">
                            <p>Bài học <p>0 bài</p></p>
                            
                        </div>
                        
                    </div>
                </div>
              </div>
              
              <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
              <script nomodule src="https://unkg.com / ionicons @ 5.5.2 / dist / ionicons /ionicons.js "></script>
            </div>
            </div>
        );
}

export default AIlearn;