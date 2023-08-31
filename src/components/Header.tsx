import { useSelector } from 'react-redux';
import { CombineType } from '../types';

function Header() {
  const data = useSelector((globalState: CombineType) => globalState);

  const { user: { email } } = data;
  const { wallet: { expenses } } = data;

  const totalExpenses = expenses.reduce((acc, expense) => {
    acc.value += expense.value;
    return acc;
  }, {
    value: 0,
  });

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
          {`Despesa total: R$${totalExpenses.value}`}
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
