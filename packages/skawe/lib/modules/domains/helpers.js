/**
 * @summary Get URL of a reply page.
 * @param {Object} reply
 */

export const getPageUrl = function(domain, isAbsolute = false){
  const prefix = isAbsolute ? Utils.getSiteUrl().slice(0, -1) : '';
  return `${prefix}/accounts/list-dns-manager/domain/${domain._id}/${domain.domainId}`;
};
