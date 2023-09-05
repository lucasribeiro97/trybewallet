import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ReduxState, Dispatch, ExpenseData } from '../types';
import { addExpense, thunkCurrencies, thunkExchangeRates } from '../redux/actions';

const INITIAL_STATE = {
  id: 0,
  value: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  description: '',
  exchangeRates: {},
};

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const data = useSelector((globalState: ReduxState) => globalState);
  const { wallet: { currencies } } = data;

  const [expense, setExpense] = useState<ExpenseData>(INITIAL_STATE);

  useEffect(() => {
    dispatch(thunkCurrencies());
  }, [dispatch]);

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = target;
    setExpense({ ...expense, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextId = data.wallet.expenses.length;

    const currentExchangeRates = await dispatch(thunkExchangeRates());

    const newExpense: ExpenseData = {
      ...expense,
      id: nextId,
      exchangeRates: currentExchangeRates,
    };
    dispatch(addExpense(newExpense));
    setExpense(INITIAL_STATE);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        Valor da despesa:
        <input
          name="value"
          type="text"
          data-testid="value-input"
          value={ expense.value }
          onChange={ handleChange }
        />
      </label>
      <label>
        Descrição da despesa:
        <input
          name="description"
          type="text"
          data-testid="description-input"
          value={ expense.description }
          onChange={ handleChange }
        />
      </label>
      <label>
        Moeda
        <select
          name="currency"
          value={ expense.currency }
          data-testid="currency-input"
          onChange={ handleChange }
        >
          {currencies.map((cur) => (
            <option key={ cur }>
              {cur}
            </option>
          ))}
        </select>
      </label>
      <span>Método de pagamento</span>
      <select
        name="method"
        value={ expense.method }
        data-testid="method-input"
        onChange={ handleChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
      <span>Categoria</span>
      <select
        name="tag"
        value={ expense.tag }
        data-testid="tag-input"
        onChange={ handleChange }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
      <button>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
