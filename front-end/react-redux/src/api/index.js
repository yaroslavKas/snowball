const CLIENT_ID = '754439859951-ats57bfia6or81mkvn4ov051r7is2sf1.apps.googleusercontent.com';
const SCOPES = ['https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/plus.me'];

export default {
  authorize(params) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line
      gapi.auth.authorize(
        {
          'client_id': CLIENT_ID,
          'scope': SCOPES,
          'immediate': params.immediate,
          'cookie_policy': 'single_host_origin'
        },
        authResult => {
          if (authResult.error) {
            return reject(authResult.error);
          }
        }
      )
    })
  },
  listTaskLists() {
    // eslint-disable-next-line
    const request = gapi.client.task.tasklists.list();

    return this.makeRequest(request);
  },

  makeRequest(requestObj) {
    return new Promise((resolve, reject) => {
      requestObj.execute(resp =>
        resp.error
          ? reject(resp.error)
          : resolve(resp.result)
      );
    });
  }
}