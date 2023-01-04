import { test, expect } from '@playwright/test';

test.describe('Projects Validations', () => {

  let projectID : string;
  const projectName = 'Project Created By Playwright API Testing';

  test('POST - Create a new Project', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/projects`, {
      data : {
        name : projectName
      }
    });
    expect(response.ok()).toBeTruthy();
    const json = await response.json();
    projectID = json['id'];
    expect(json['name']).toBe(projectName);
  });

  test('GET - get the recently created Project', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/projects/${projectID}`);
    const json = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(json['id']).toBe(projectID);
    expect(json['name']).toBe(projectName);
  });

  test('POST - Update the recently created Project', async ({ request, baseURL }) => {
    const newName = 'This Project has been updated by Playwright API Testing';
    const response = await request.post(`${baseURL}/projects/${projectID}`, {
      data: {
        name: newName
      }
    });
    const json = await response.json();
    expect(response.url()).toContain(projectID);
    expect(response.ok()).toBeTruthy();
    expect(json['id']).toBe(projectID);
    expect(json['name']).toBe(newName);
  });

  test('DELETE - delete the recently created Project', async ({ request, baseURL }) => {
    const response = await request.delete(`${baseURL}/projects/${projectID}`);
    expect(response.url()).toContain(projectID);
    expect(response.status()).toBe(204);
  });

  test('GET - get all user projects', async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/projects`);
    expect(response.ok()).toBeTruthy();
  });

});