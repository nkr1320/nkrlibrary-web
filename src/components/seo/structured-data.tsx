import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'website' | 'course' | 'video' | 'article';
  data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': getSchemaType(type),
      ...data,
    };

    if (type === 'website') {
      return {
        ...baseData,
        name: 'NKR Library',
        description: 'Tech tutorials, scam alerts, and free websites for students',
        url: 'https://nkrlibrary.com',
        publisher: {
          '@type': 'Organization',
          name: 'NKR Library',
          logo: 'https://nkrlibrary.com/logo.png',
          foundingDate: '2020',
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'contact@nkrlibrary.com'
          }
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://nkrlibrary.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
        sameAs: [
          'https://www.youtube.com/@nkrlibrary',
          'https://twitter.com/nkrlibrary'
        ]
      };
    }

    if (type === 'course') {
      return {
        ...baseData,
        provider: {
          '@type': 'Organization',
          name: 'NKR Library',
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          isAccessibleForFree: true,
        },
        educationalLevel: 'Beginner to Advanced',
        teaches: data.skills || ['Programming', 'Cybersecurity', 'Web Development']
      };
    }

    if (type === 'video') {
      return {
        ...baseData,
        name: data.title,
        description: data.description,
        thumbnailUrl: data.thumbnail,
        uploadDate: data.uploadDate,
        duration: data.duration,
        contentUrl: data.url,
        embedUrl: data.embedUrl,
        publisher: {
          '@type': 'Organization',
          name: 'NKR Library'
        }
      };
    }

    if (type === 'article') {
      return {
        ...baseData,
        headline: data.title,
        author: {
          '@type': 'Person',
          name: 'NKR'
        },
        publisher: {
          '@type': 'Organization',
          name: 'NKR Library'
        },
        datePublished: data.publishedDate,
        dateModified: data.modifiedDate,
        mainEntityOfPage: data.url
      };
    }

    return baseData;
  };

  const getSchemaType = (type: string) => {
    switch (type) {
      case 'website': return 'WebSite';
      case 'course': return 'Course';
      case 'video': return 'VideoObject';
      case 'article': return 'Article';
      default: return 'Thing';
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};