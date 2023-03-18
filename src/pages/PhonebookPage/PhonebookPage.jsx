import PhonebooksForm from 'modules/Phonebooks/PhonebooksForm/PhonebooksForm';
import PhonebooksFilter from 'modules/Phonebooks/PhonebooksFilter/PhonebooksFilter';
import PhonebookList from 'modules/Phonebooks/PhonebookList/PhonebookList';

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
