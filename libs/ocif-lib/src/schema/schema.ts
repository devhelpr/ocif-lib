export const ocifCoreSchema = {
  $schema: 'https://json-schema.org/draft/2020-12/schema',
  title: 'OCIF core 0.5',
  description:
    'The schema for the Open Canvas Interchange Format (OCIF) Core document structure.',
  type: 'object',
  properties: {
    ocif: {
      type: 'string',
      description: 'The URI of the OCIF schema',
    },
    nodes: {
      type: 'array',
      description: 'A list of nodes',
      items: {
        $ref: '#/$defs/node',
      },
    },
    relations: {
      type: 'array',
      description: 'A list of relations',
      items: {
        $ref: '#/$defs/relation',
      },
    },
    resources: {
      type: 'array',
      description: 'A list of resources',
      items: {
        $ref: '#/$defs/resource',
      },
    },
    schemas: {
      type: 'array',
      description: 'Declared schemas',
      items: {
        $ref: '#/$defs/schema',
      },
    },
  },
  $defs: {
    node: {
      type: 'object',
      description: 'A node in the OCIF document',
      properties: {
        id: {
          type: 'string',
          description: 'A unique identifier for the node.',
        },
        position: {
          type: 'array',
          description: 'Coordinate as (x,y) or (x,y,z).',
          items: {
            type: 'number',
          },
        },
        size: {
          type: 'array',
          description: 'The size of the node per dimension.',
          items: {
            type: 'number',
          },
        },
        resource: {
          type: 'string',
          description: 'The resource to display',
        },
        resourceFit: {
          type: 'string',
          description: 'Fitting resource in item',
          enum: [
            'none',
            'containX',
            'containY',
            'contain',
            'cover',
            'fill',
            'tile',
          ],
        },
        data: {
          type: 'array',
          description: 'Extended node data',
        },
        rotation: {
          type: 'number',
          description: '+/- 360 degrees',
        },
        relation: {
          type: 'string',
          description: 'ID of a relation',
        },
      },
      required: ['id'],
    },
    relation: {
      type: 'object',
      description: 'A relation between nodes',
      properties: {
        id: {
          type: 'string',
          description: 'A unique identifier for the relation.',
        },
        data: {
          type: 'array',
          description: 'Additional data for the relation.',
        },
        node: {
          type: 'string',
          description: 'ID of a visual node, which represents this relation.',
        },
      },
      required: ['id'],
    },
    resource: {
      type: 'object',
      description: 'A resource in the OCIF document',
      properties: {
        id: {
          type: 'string',
          description: 'A unique identifier for the resource.',
        },
        representations: {
          type: 'array',
          description: 'A list of representations of the resource.',
          items: {
            $ref: '#/$defs/representation',
          },
        },
      },
      required: ['id', 'representations'],
    },
    representation: {
      type: 'object',
      description:
        'A representation of a resource. Either content or location MUST be present. If content is used, location must be left out and vice versa.',
      properties: {
        location: {
          type: 'string',
          description:
            'The storage location for the resource. This can be a relative URI for an external resource or an absolute URI for a remote resource. If a data: URI is used, the content and MIME-type properties are implicitly defined already. Values in content and mime-type are ignored.',
        },
        mimeType: {
          type: 'string',
          description: 'The IANA MIME Type of the resource.',
        },
        content: {
          type: 'string',
          description:
            'The content of the resource. This is the actual data of the resource as a string. Can be base64-encoded.',
        },
      },
    },
    schema: {
      type: 'object',
      description: 'A schema in the OCIF document',
      properties: {
        uri: {
          type: 'string',
          description:
            'The URI of the schema, Identifier (and location) of the schema.',
        },
        schema: {
          type: 'object',
          description: 'The actual JSON schema as a JSON object.',
        },
        location: {
          type: 'string',
          description: 'The storage location for the schema.',
        },
        name: {
          type: 'string',
          description: 'An optional short name for the schema.',
        },
      },
      required: ['uri'],
    },
  },
  required: ['ocif'],
};
