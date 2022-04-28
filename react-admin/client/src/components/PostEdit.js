import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

export const PostEdit = (props) => {
  return (
    <Edit title='Edit a post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id'/>
        <TextInput source='title'/>
        <TextInput multiline source='body'/>
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}
