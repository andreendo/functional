import * as R from 'ramda';

export const contentOfTag = R.curry(
    (xmlNode, tagName) => xmlNode.getElementsByTagName(tagName)[0].textContent
);

export const contentOfSource = contentOfTag(R.__, 'source');

export const contentOfAdded = contentOfTag(R.__, 'added');
export const contentOfUpdated = contentOfTag(R.__, 'lastupdated');
export const contentOfID = contentOfTag(R.__, 'id');

export const getGitHubProject = xmlNode => contentOfSource(xmlNode).replace('https://github.com/', '');

export const elementsToArray = nodes => {
    const arr = [];
    for (let i = 0; i < nodes.length; i++)
        arr.push(nodes[i]);
    return arr;
};

export const isValid = R.curry(
    (app, addedAfterYear, updatedAfterYear) => {
        if (!contentOfSource(app).includes('github.com'))
            return false;

        const addedDate = new Date(contentOfAdded(app));
        if (addedDate.getFullYear() < addedAfterYear)
            return false;

        const lastUpdatedDate = new Date(contentOfUpdated(app));
        if (lastUpdatedDate.getFullYear() < updatedAfterYear)
            return false;

        return true;
    }
);