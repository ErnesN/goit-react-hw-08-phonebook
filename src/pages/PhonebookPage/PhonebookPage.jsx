import PhonebooksForm from 'modules/PhonebooksForm/PhonebooksForm';
import { PhonebooksFilter } from 'modules/PhonebooksFilter/PhonebooksFilter';
import { PhonebookList } from 'modules/PhonebookList/PhonebookList';

const PhonebookPage = () => {
  return (
    <div>
      <PhonebooksForm />
      <PhonebooksFilter />
      <PhonebookList />
    </div>
  );
};

export default PhonebookPage;
