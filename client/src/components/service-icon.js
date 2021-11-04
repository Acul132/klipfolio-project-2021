import {ReactComponent as GoogleAnalytics} from 'assets/services/google-analytics.svg'
import {ReactComponent as Facebook} from 'assets/services/facebook.svg'
import {ReactComponent as Dropbox} from 'assets/services/dropbox.svg'
import {ReactComponent as GoogleDrive} from 'assets/services/google-drive.svg'
import {ReactComponent as LinkedIn} from 'assets/services/linkedin.svg'
import {ReactComponent as Mailchimp} from 'assets/services/mailchimp.svg'
import {ReactComponent as Slack} from 'assets/services/slack.svg'
import {ReactComponent as Twitter} from 'assets/services/twitter.svg'

const ServiceIcon = ({name, ...rest}) => {
  switch (name) {
    case 'google-analytics':
      return <GoogleAnalytics {...rest}/>
    case 'facebook':
      return <Facebook {...rest}/>
    case 'dropbox':
      return <Dropbox {...rest}/>
    case 'google-drive':
      return <GoogleDrive {...rest}/>
    case 'linkedin':
      return <LinkedIn {...rest}/>
    case 'mailchimp':
      return <Mailchimp {...rest}/>
    case 'slack':
      return <Slack {...rest}/>
    case 'twitter':
      return <Twitter {...rest}/>
    default:
      return <div>{name}</div>
  }
}

export default ServiceIcon