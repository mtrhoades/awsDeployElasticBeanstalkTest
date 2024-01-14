import React from 'react';
import DefaultHTML from './defaultHTML';

const testGetRoutePage = ( {comments} ) => {
  return (
    <DefaultHTML>
        <h4>This is the testGetRoutePage!</h4>

        <table>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Text</th>
          </thead>
          {
            comments.map((comment) => {
              return (
                <tr key={comment.id}>
                  <td>
                      {comment.name}
                  </td>
                  <td>
                      {comment.email}
                  </td>
                  <td>
                      {comment.text}
                  </td>
                </tr>
              )
            })
          }
        </table>

    </DefaultHTML>
  )
}

export default testGetRoutePage;