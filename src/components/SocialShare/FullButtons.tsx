import React from 'react';
import './react-share-styles.css';
import { 
    TwitterShareButton, XIcon,
    FacebookShareButton, FacebookIcon,
    LinkedinShareButton, LinkedinIcon,
    HatenaShareButton, HatenaIcon, 
    PocketShareButton, PocketIcon,
} from 'react-share';

const SocialShare = ({ url, title }) => {
  return (
    <div className="buttons-container">
      <div className="some-network">
        <TwitterShareButton className="some-network_share-button" title={title} url={url}>
            <XIcon size={40} round={true} />
        </TwitterShareButton>
      </div>

      <div className="some-network">
        <FacebookShareButton className="some-network_share-button" url={url}>
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
      </div>

      <div className="some-network">
        <LinkedinShareButton className="some-network_share-button" url={url}>
          <LinkedinIcon size={40} round={true} />
        </LinkedinShareButton>
      </div>

      <div className="some-network">
        <HatenaShareButton className="some-network_share-button" url={url} title={title}>
          <HatenaIcon size={40} round={false} />
        </HatenaShareButton>
      </div>

      <div className="some-network">
        <PocketShareButton className="some-network_share-button" url={url} title={title}>
          <PocketIcon size={40} round={false} />
        </PocketShareButton>
      </div>
    </div>
  );
};

export default SocialShare;