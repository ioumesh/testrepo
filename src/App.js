import React from 'react';
import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom'
import Home from './website/home/HomeContainer';
import AboutUs from './website/about_us/AboutUsContainer';
import ContactUs from './website/contact_us/ContactUsContainer';
import Customers from './website/customers/CustomersContainer';
import Features from './website/features/FeaturesContainer';
import Gdpr from './website/gdpr/GdprContainer';
import Pricing from './website/pricing/PricingContainer';
import Privacy from './website/privacy/PrivacyContainer';
import ResponsibleDisclosure from './website/responsible_disclosure/ResponsibleDisclosureContainer';
import TermsOfService from './website/terms_service/TermsOfServiceContainer';


function App() {
	return (
		
		<Router>

			<Switch>
				<Route path='/aboutus' exact component={AboutUs} />
				<Route path='/contactus' exact component={ContactUs} />
				<Route path='/customers' exact component={Customers} />
				<Route path='/features' exact component={Features} />
				<Route path='/gdpr' exact component={Gdpr} />
				<Route path='/pricing' exact component={Pricing} />
				<Route path='/privacy' exact component={Privacy} />
				<Route path='/responsible-disclosure' exact component={ResponsibleDisclosure} />
				<Route path='/terms-of-service' exact component={TermsOfService} />
				<Route path='/' exact component={Home} /> 
				<Redirect to="/"/>
		</Switch>
		</Router>

	);
	
}

export default App;
