import {Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'Component/ContentWrapper';
import ProgressBar from './ProgressBar.component';


class Checkout extends SourceCheckout{

    renderProgressBar(){
        const { checkoutStep } = this.props;
        return (
            <ProgressBar stepMap={this.stepMap} checkoutStep={checkoutStep} />
        )
    }
    render() {
        // const { checkoutStep } = this.props;
        // console.log(checkoutStep)
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;

