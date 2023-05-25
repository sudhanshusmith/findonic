import React from 'react'

import appTemplate from '../../../images/app/appTemplate2.png'

function Download() {
  return (
    <div className="cta wf-section">
    <div className="container">
        <div className="grid-2-columns center vertical">
            <div id="w-node-e3ef2423-35b6-97c3-b3c1-03b66671ad3c-d3c9f7cb" className="relative-div center">
                <img src={appTemplate} loading="lazy" width="400" sizes="(max-width: 479px) 86vw, 400px" srcset={appTemplate} alt="" className="iphone"/>
                <img src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e39a70d98fcce11c2ca75c_card-1.png" loading="lazy" width="750" sizes="(max-width: 479px) 90px, 130px" srcset="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e39a70d98fcce11c2ca75c_card-1-p-500.png 500w, https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e39a70d98fcce11c2ca75c_card-1-p-800.png 800w, https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e39a70d98fcce11c2ca75c_card-1-p-1080.png 1080w, https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e39a70d98fcce11c2ca75c_card-1.png 1500w" alt="" className="card-1"/>
                <div className="circle-shape"></div>
                <div className="circle-shape-2 top"></div>
            </div>
            <div data-w-id="a1553056-826e-931c-7276-165e2b8afdd7"  className="max-w-left second">
                <div className="tag-top-text">
                    <div className="label-text">Get started on the Go</div>
                </div>
                <p className="subhead second _100">
                    Download on your iPhone or Android device and stay connected with your <span className="gray-text">team, anywhere, anytime.</span>
                </p>
                <div className="margin-60px">
                    <div className="button-flex left">
                        <a href="#" className="link-block w-inline-block">
                            <img src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e39b561dbf89148780fc20_Apple%20Store%20Badge.png" loading="lazy" width="132" alt=""/>
                        </a>
                        <a href="#" className="link-block w-inline-block">
                            <img src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e39b561dbf890b8780fc22_Google%20Store%20Badge.png" loading="lazy" width="148.5" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Download