import FAQ from "../components/pricing/FAQ"
import ComparisonTable from "../components/pricing/PriceComparison"
import PricingPlans from "../components/pricing/PricingMain"
import TryMiporis from "../components/pricing/TryMiporis"
import { useSelector } from 'react-redux';
function Pricing() {
    const { isAuthenticated, token } = useSelector((state) => state.auth);

    return (
        <div>
            <PricingPlans isAuthenticated={isAuthenticated} token={token} />
            <ComparisonTable />
            {!isAuthenticated &&
                <>
                    <TryMiporis />
                    <FAQ />
                </>}

        </div>
    )
}

export default Pricing