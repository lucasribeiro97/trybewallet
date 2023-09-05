import { useSelector } from 'react-redux';
import { ReduxState } from '../types';

function Header() {
  const data = useSelector((globalState: ReduxState) => globalState);

  const { user: { email } } = data;
  const { wallet: { expenses } } = data;

  const totalExpenses = expenses.reduce((total, expense) => {
    const exchangeRate = expense.exchangeRates[expense.currency];
    const value = Number(expense.value);
    const askValue = value * exchangeRate.ask;
    return total + askValue;
  }, 0);

  return (
    <div>
      <header>
        <h1>Trybe</h1>
        <div
          data-testid="email-field"
        >
          {`Email: ${email}`}
        </div>
        <div
          data-testid="total-field"
        >
          { totalExpenses.toFixed(2) }
        </div>
        <div
          data-testid="header-currency-field"
        >
          BRL
        </div>
      </header>
    </div>
  );
}

export default Header;
