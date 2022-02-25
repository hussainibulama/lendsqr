import React from "react";
import "./index.scss";

import user from "../../assets/svg/Vector.svg";
import rate from "../../assets/svg/Vector(1).png";
import rates from "../../assets/svg/Vector(1).svg";
import { useHistory,useParams} from "react-router-dom";
import data from "./data.json";

const Viewuser=()=> {
  const history = useHistory();
  const Params = useParams();
  return (
        <div className="Section">
            
            <div className="section_Section">
              <div className="front">
                <p  onClick={()=>{
            history.push(`/users`);
           
                }} style={{cursor:"pointer"}}><svg width="152" height="30" viewBox="0 0 152 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.728 9.44H48.488C49.704 9.44 50.6053 9.696 51.192 10.208C51.7893 10.7093 52.088 11.424 52.088 12.352C52.088 12.9067 51.928 13.3973 51.608 13.824C51.2987 14.2507 50.8667 14.5173 50.312 14.624V14.64C50.9307 14.7573 51.4267 15.04 51.8 15.488C52.1733 15.936 52.36 16.4533 52.36 17.04C52.36 17.9467 52.0187 18.6667 51.336 19.2C50.6533 19.7333 49.6987 20 48.472 20H44.728V9.44ZM48.504 14.08C49.2613 14.08 49.8213 13.9413 50.184 13.664C50.5573 13.376 50.744 12.9387 50.744 12.352C50.744 11.2107 49.9973 10.64 48.504 10.64H46.008V14.08H48.504ZM48.776 18.8C49.5227 18.8 50.0827 18.6507 50.456 18.352C50.8293 18.0427 51.016 17.6053 51.016 17.04C51.016 16.4747 50.8293 16.0427 50.456 15.744C50.0827 15.4347 49.5227 15.28 48.776 15.28H46.008V18.8H48.776ZM61.5011 19.072C61.7145 19.072 61.9278 19.0453 62.1411 18.992L62.0611 20C61.7625 20.1067 61.4425 20.16 61.1011 20.16C60.6851 20.16 60.3545 20.0693 60.1091 19.888C59.8745 19.7067 59.7251 19.4027 59.6611 18.976C59.4158 19.3493 59.0531 19.6427 58.5731 19.856C58.1038 20.0587 57.6078 20.16 57.0851 20.16C56.2958 20.16 55.6451 19.9787 55.1331 19.616C54.6211 19.2427 54.3651 18.7093 54.3651 18.016C54.3651 17.408 54.6318 16.8853 55.1651 16.448C55.6985 16 56.4718 15.6907 57.4851 15.52L59.6131 15.168V14.72C59.6131 14.1867 59.4478 13.76 59.1171 13.44C58.7865 13.12 58.3278 12.96 57.7411 12.96C57.2078 12.96 56.7438 13.088 56.3491 13.344C55.9651 13.6 55.6665 13.9787 55.4531 14.48L54.5091 13.792C54.7225 13.1947 55.1171 12.72 55.6931 12.368C56.2798 12.016 56.9625 11.84 57.7411 11.84C58.6905 11.84 59.4531 12.0693 60.0291 12.528C60.6051 12.9867 60.8931 13.664 60.8931 14.56V18.496C60.8931 18.688 60.9411 18.832 61.0371 18.928C61.1331 19.024 61.2878 19.072 61.5011 19.072ZM57.1491 19.04C57.8211 19.04 58.3971 18.88 58.8771 18.56C59.3678 18.24 59.6131 17.824 59.6131 17.312V16.208L57.8211 16.544C57.1065 16.672 56.5731 16.8587 56.2211 17.104C55.8691 17.3387 55.6931 17.6427 55.6931 18.016C55.6931 18.3467 55.8211 18.6027 56.0771 18.784C56.3331 18.9547 56.6905 19.04 57.1491 19.04ZM67.3796 11.84C68.1796 11.84 68.8516 12.0267 69.3956 12.4C69.9503 12.7627 70.3823 13.2853 70.6916 13.968L69.4756 14.544C69.1343 13.488 68.425 12.96 67.3476 12.96C66.5476 12.96 65.9183 13.232 65.4596 13.776C65.0116 14.3093 64.7876 15.0507 64.7876 16C64.7876 16.9493 65.0116 17.696 65.4596 18.24C65.9183 18.7733 66.5476 19.04 67.3476 19.04C67.9663 19.04 68.4623 18.9013 68.8356 18.624C69.2196 18.336 69.4703 17.9253 69.5876 17.392L70.7716 17.808C70.4943 18.5547 70.0676 19.136 69.4916 19.552C68.9156 19.9573 68.2116 20.16 67.3796 20.16C66.1743 20.16 65.225 19.792 64.5316 19.056C63.849 18.32 63.5076 17.3013 63.5076 16C63.5076 14.6987 63.849 13.68 64.5316 12.944C65.225 12.208 66.1743 11.84 67.3796 11.84ZM76.0109 16.048L74.3149 17.744V20H73.0349V8.32H74.3149V16.144L78.4589 12H80.0589L76.9389 15.12L80.2509 20H78.6989L76.0109 16.048ZM91.7903 19.44C91.2569 19.92 90.5689 20.16 89.7263 20.16C89.0756 20.16 88.5423 19.984 88.1263 19.632C87.7209 19.28 87.5129 18.7413 87.5023 18.016V13.104H85.9023V12H87.5023V10.08L88.7823 9.728V12H91.7423V13.104H88.7823V17.792C88.7823 18.176 88.8889 18.4693 89.1023 18.672C89.3263 18.864 89.6196 18.96 89.9823 18.96C90.4943 18.96 90.9476 18.7627 91.3423 18.368L91.7903 19.44ZM96.9734 11.84C98.1787 11.84 99.1227 12.208 99.8054 12.944C100.499 13.68 100.845 14.6987 100.845 16C100.845 17.3013 100.499 18.32 99.8054 19.056C99.1227 19.792 98.1787 20.16 96.9734 20.16C95.768 20.16 94.8187 19.792 94.1254 19.056C93.4427 18.32 93.1014 17.3013 93.1014 16C93.1014 14.6987 93.4427 13.68 94.1254 12.944C94.8187 12.208 95.768 11.84 96.9734 11.84ZM96.9734 12.944C96.1627 12.944 95.528 13.216 95.0694 13.76C94.6107 14.304 94.3814 15.0507 94.3814 16C94.3814 16.9493 94.6107 17.696 95.0694 18.24C95.528 18.784 96.1627 19.056 96.9734 19.056C97.784 19.056 98.4187 18.784 98.8774 18.24C99.336 17.696 99.5654 16.9493 99.5654 16C99.5654 15.0507 99.336 14.304 98.8774 13.76C98.4187 13.216 97.784 12.944 96.9734 12.944ZM117.201 16.064C117.201 17.4187 116.844 18.4427 116.129 19.136C115.425 19.8187 114.401 20.16 113.057 20.16C111.713 20.16 110.684 19.8133 109.969 19.12C109.265 18.4267 108.913 17.408 108.913 16.064V9.44H110.193V15.744C110.193 16.8533 110.422 17.6693 110.881 18.192C111.35 18.704 112.076 18.96 113.057 18.96C114.038 18.96 114.758 18.704 115.217 18.192C115.686 17.6693 115.921 16.8533 115.921 15.744V9.44H117.201V16.064ZM122.88 20.16C122.112 20.16 121.419 20.0107 120.8 19.712C120.181 19.4027 119.728 18.9493 119.44 18.352L120.48 17.632C120.661 18.1013 120.976 18.4533 121.424 18.688C121.872 18.9227 122.4 19.04 123.008 19.04C123.637 19.04 124.117 18.928 124.448 18.704C124.779 18.48 124.944 18.1973 124.944 17.856C124.944 17.5467 124.789 17.3013 124.48 17.12C124.171 16.928 123.627 16.7627 122.848 16.624C122.08 16.4853 121.472 16.32 121.024 16.128C120.576 15.9253 120.251 15.6747 120.048 15.376C119.845 15.0667 119.744 14.688 119.744 14.24C119.744 13.8027 119.872 13.4027 120.128 13.04C120.384 12.6773 120.752 12.3893 121.232 12.176C121.712 11.952 122.267 11.84 122.896 11.84C123.749 11.84 124.432 12 124.944 12.32C125.467 12.6293 125.84 13.1093 126.064 13.76L124.976 14.4C124.805 13.888 124.544 13.52 124.192 13.296C123.851 13.072 123.419 12.96 122.896 12.96C122.373 12.96 121.931 13.0773 121.568 13.312C121.205 13.5467 121.024 13.8187 121.024 14.128C121.024 14.48 121.179 14.752 121.488 14.944C121.808 15.136 122.373 15.3013 123.184 15.44C124.293 15.6213 125.077 15.8933 125.536 16.256C125.995 16.6187 126.224 17.1307 126.224 17.792C126.224 18.2507 126.085 18.6613 125.808 19.024C125.541 19.376 125.152 19.6533 124.64 19.856C124.139 20.0587 123.552 20.16 122.88 20.16ZM135.461 15.584C135.461 15.8827 135.44 16.1813 135.397 16.48H129.365C129.44 17.2907 129.707 17.92 130.165 18.368C130.635 18.816 131.237 19.04 131.973 19.04C132.56 19.04 133.045 18.9387 133.429 18.736C133.824 18.5333 134.091 18.24 134.229 17.856L135.301 18.416C134.981 18.9813 134.555 19.4133 134.021 19.712C133.488 20.0107 132.805 20.16 131.973 20.16C130.768 20.16 129.819 19.792 129.125 19.056C128.443 18.32 128.101 17.3013 128.101 16C128.101 14.6987 128.427 13.68 129.077 12.944C129.739 12.208 130.672 11.84 131.877 11.84C132.624 11.84 133.269 12.0053 133.813 12.336C134.357 12.6667 134.768 13.1147 135.045 13.68C135.323 14.2453 135.461 14.88 135.461 15.584ZM131.877 12.96C131.173 12.96 130.603 13.168 130.165 13.584C129.739 14 129.477 14.5867 129.381 15.344H134.229C134.144 14.5973 133.899 14.016 133.493 13.6C133.088 13.1733 132.549 12.96 131.877 12.96ZM141.67 11.84C142.054 11.84 142.348 11.8933 142.55 12L142.294 13.248C142.038 13.1093 141.702 13.04 141.286 13.04C140.945 13.04 140.609 13.1413 140.278 13.344C139.958 13.536 139.692 13.8347 139.478 14.24C139.276 14.6347 139.174 15.1147 139.174 15.68V20H137.894V12H138.934L139.11 13.312C139.558 12.3307 140.412 11.84 141.67 11.84ZM146.802 20.16C146.034 20.16 145.34 20.0107 144.722 19.712C144.103 19.4027 143.65 18.9493 143.362 18.352L144.402 17.632C144.583 18.1013 144.898 18.4533 145.346 18.688C145.794 18.9227 146.322 19.04 146.93 19.04C147.559 19.04 148.039 18.928 148.37 18.704C148.7 18.48 148.866 18.1973 148.866 17.856C148.866 17.5467 148.711 17.3013 148.402 17.12C148.092 16.928 147.548 16.7627 146.77 16.624C146.002 16.4853 145.394 16.32 144.946 16.128C144.498 15.9253 144.172 15.6747 143.97 15.376C143.767 15.0667 143.666 14.688 143.666 14.24C143.666 13.8027 143.794 13.4027 144.05 13.04C144.306 12.6773 144.674 12.3893 145.154 12.176C145.634 11.952 146.188 11.84 146.818 11.84C147.671 11.84 148.354 12 148.866 12.32C149.388 12.6293 149.762 13.1093 149.986 13.76L148.898 14.4C148.727 13.888 148.466 13.52 148.114 13.296C147.772 13.072 147.34 12.96 146.818 12.96C146.295 12.96 145.852 13.0773 145.49 13.312C145.127 13.5467 144.946 13.8187 144.946 14.128C144.946 14.48 145.1 14.752 145.41 14.944C145.73 15.136 146.295 15.3013 147.106 15.44C148.215 15.6213 148.999 15.8933 149.458 16.256C149.916 16.6187 150.146 17.1307 150.146 17.792C150.146 18.2507 150.007 18.6613 149.73 19.024C149.463 19.376 149.074 19.6533 148.562 19.856C148.06 20.0587 147.474 20.16 146.802 20.16Z" fill="#545F7D"/>
<path d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z" fill="#545F7D"/>
</svg>
 </p>
 <div className="sepa">
     <div>
     <h3>User Details</h3>

     </div>
     <div>
         <button className="blist">Blacklist User</button>
         <button className="alist">Activate User</button>
     </div>
 </div>
              </div>
              <div className="micker">
                  <div className="tops">
                      <div className="circlers" >
                        <img src={user} alt="users"/>
                      </div>
                      <div className="tesers col1s">
                          <h3>Grace Effiom</h3>
                          <p>LSQFf587g90</p>
                      </div>
                      <div className="tesers col1s">
                          <p>User’s Tier</p>
                          <span>
                              <img src={rates} alt="rating"/>
                              <img src={rate} alt="rating"/>
                              <img src={rate} alt="rating"/>
                          </span>
                      </div>
                      <div className="tesers">
                      <h3>₦200,000.00</h3>
                          <p>9912345678/Providus Bank</p>
                      </div>
                  </div>
                  <div className="bots">
                      <div className="sur sur-active"><p>General Details</p></div>
                      <div className="sur"><p>Documents</p></div>
                      <div className="sur"><p>Bank Details</p></div>
                      <div className="sur"><p>Loans</p></div>
                      <div className="sur"><p>Savings</p></div>
                      <div className="sur"><p>App and System</p></div>
                  </div>
              </div>
              <div className="footly">
                  <h2>Personal Information</h2>
                  <div className="server1">
                      <div>
                          <p>full Name</p>
                          <h3>Grace Effiom</h3>
                      </div>
                      <div>
                          <p>Phone Number</p>
                          <h3>{data[Params.id].phone}</h3>
                      </div>
                      <div>
                          <p>Email Address</p>
                          <h3>{data[Params.id].email}</h3>
                      </div>
                      <div>
                          <p>Bvn</p>
                          <h3>{data[Params.id].phone}</h3>
                      </div>
                      <div>
                          <p>Gender</p>
                          <h3>Female</h3>
                      </div>
                  </div>
                  <div className="server1">
                      <div>
                          <p>Marital status</p>
                          <h3>Single</h3>
                      </div>
                      <div>
                          <p>Children</p>
                          <h3>None</h3>
                      </div>
                      <div>
                          <p>Type of residence</p>
                          <h3>Parent’s Apartment</h3>
                      </div>
                    
                  </div>
                  <hr/>
                  <h2>Education and Employment</h2>
                  <div className="server1">
                      <div>
                          <p>level of education</p>
                          <h3>B.Sc</h3>
                      </div>
                      <div>
                          <p>employment status</p>
                          <h3>Employed</h3>
                      </div>
                      <div>
                          <p>sector of employment</p>
                          <h3>FinTech</h3>
                      </div>
                      <div>
                          <p>Duration of employment</p>
                          <h3>2 years</h3>
                      </div>
                 
                  </div>
                  <div className="server1">
                      <div>
                          <p>office email</p>
                          <h3>grace@lendsqr.com</h3>
                      </div>
                      <div>
                          <p>Monthly income</p>
                          <h3>₦200,000.00- ₦400,000.00</h3>
                      </div>
                      <div>
                          <p>loan repayment</p>
                          <h3>40,000</h3>
                      </div>
                     
                 
                  </div>
                  <hr/>
                  <h2>Socials</h2>

                  <div className="server1">
                      <div>
                          <p>Twitter</p>
                          <h3>@grace_effiom</h3>
                      </div>
                      <div>
                          <p>Facebook</p>
                          <h3>Grace Effiom</h3>
                      </div>
                      <div>
                          <p>Instagram</p>
                          <h3>@grace_effiom</h3>
                      </div>
                     
                 
                  </div>
                  <hr/>
                  <h2>Guarantor</h2>

                  <div className="server1">
                      <div>
                          <p>full Name</p>
                          <h3>Debby Ogana</h3>
                      </div>
                      <div>
                          <p>Phone Number</p>
                          <h3>07060780922</h3>
                      </div>
                      <div>
                          <p>Email Address</p>
                          <h3>debby@gmail.com</h3>
                      </div>
                      <div>
                          <p>Relationship</p>
                          <h3>Sister</h3>
                      </div>
                  </div>
                  <hr/>
                  <div className="server1">
                      <div>
                          <p>full Name</p>
                          <h3>Debby Ogana</h3>
                      </div>
                      <div>
                          <p>Phone Number</p>
                          <h3>07060780922</h3>
                      </div>
                      <div>
                          <p>Email Address</p>
                          <h3>debby@gmail.com</h3>
                      </div>
                      <div>
                          <p>Relationship</p>
                          <h3>Sister</h3>
                      </div>
                  </div>
              </div>
            </div>
            
        </div>
  );
}

export default Viewuser;
