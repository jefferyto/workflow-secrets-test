import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  const secret = core.getInput('secret');
  core.info(`The secret is "${secret}"`);
  core.info(`The secret is ${secret.length} characters long`);
} catch (error) {
  core.setFailed(error.message);
}
