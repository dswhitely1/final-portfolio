import styled, {css} from 'styled-components';

export const H1 = styled.h1`
    font-size: 5.6rem;

    @media (min-width: 600px) {
        font-size: 7.6rem;
    }

    @media (min-width: 960px) {
        font-size: 8.8rem;
    }

    @media (min-width: 1280px) {
        font-size: 9.6rem;
    }

    ${props => props.h1 && css`
        font-size: 5.6rem;

        @media (min-width: 600px) {
            font-size: 7.6rem;
        }
    
        @media (min-width: 960px) {
            font-size: 8.8rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 9.6rem;
        }
    `}

    ${props => props.h2 && css`
        font-size: 3.8rem;

        @media (min-width: 600px) {
            font-size: 4.8rem;
        }
    
        @media (min-width: 960px) {
            font-size: 5.6rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 6rem;
        }
    `}

    ${props => props.h3 && css`
        font-size: 3.2rem;

        @media (min-width: 600px) {
            font-size: 3.84605rem;
        }
    
        @media (min-width: 960px) {
            font-size: 4.23072rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 4.61536rem;
        }
    `}

    ${props => props.h4 && css`
        font-size: 2.5rem;

        @media (min-width: 600px) {
            font-size: 3.07696;
        }
    
        @media (min-width: 1280px) {
            font-size: 3.41888rem;
        }
    `}

    ${props => props.h5 && css`
        font-size: 2.0rem;

        @media (min-width: 600px) {
            font-size: 2.10528rem;
        }
    
        @media (min-width: 960px) {
            font-size: 2.40608rem;
        }
    `}

    ${props => props.h6 && css`
        font-size: 2rem;
    `}
`;

export const H2 = styled.h2`
    font-size: 3.8rem;

    @media (min-width: 600px) {
        font-size: 4.8rem;
    }

    @media (min-width: 960px) {
        font-size: 5.6rem;
    }

    @media (min-width: 1280px) {
        font-size: 6rem;
    }

    ${props => props.h1 && css`
        font-size: 5.6rem;

        @media (min-width: 600px) {
            font-size: 7.6rem;
        }
    
        @media (min-width: 960px) {
            font-size: 8.8rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 9.6rem;
        }
    `}

    ${props => props.h2 && css`
        font-size: 3.8rem;

        @media (min-width: 600px) {
            font-size: 4.8rem;
        }
    
        @media (min-width: 960px) {
            font-size: 5.6rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 6rem;
        }
    `}

    ${props => props.h3 && css`
        font-size: 3.2rem;

        @media (min-width: 600px) {
            font-size: 3.84605rem;
        }
    
        @media (min-width: 960px) {
            font-size: 4.23072rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 4.61536rem;
        }
    `}

    ${props => props.h4 && css`
        font-size: 2.5rem;

        @media (min-width: 600px) {
            font-size: 3.07696;
        }
    
        @media (min-width: 1280px) {
            font-size: 3.41888rem;
        }
    `}

    ${props => props.h5 && css`
        font-size: 2.0rem;

        @media (min-width: 600px) {
            font-size: 2.10528rem;
        }
    
        @media (min-width: 960px) {
            font-size: 2.40608rem;
        }
    `}

    ${props => props.h6 && css`
        font-size: 2rem;
    `}
`;

export const H3 = styled.h3`
    font-size: 3.2rem;

    @media (min-width: 600px) {
        font-size: 3.84605rem;
    }

    @media (min-width: 960px) {
        font-size: 4.23072rem;
    }

    @media (min-width: 1280px) {
        font-size: 4.61536rem;
    }

    ${props => props.h1 && css`
        font-size: 5.6rem;

        @media (min-width: 600px) {
            font-size: 7.6rem;
        }
    
        @media (min-width: 960px) {
            font-size: 8.8rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 9.6rem;
        }
    `}

    ${props => props.h2 && css`
        font-size: 3.8rem;

        @media (min-width: 600px) {
            font-size: 4.8rem;
        }
    
        @media (min-width: 960px) {
            font-size: 5.6rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 6rem;
        }
    `}

    ${props => props.h3 && css`
        font-size: 3.2rem;

        @media (min-width: 600px) {
            font-size: 3.84605rem;
        }
    
        @media (min-width: 960px) {
            font-size: 4.23072rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 4.61536rem;
        }
    `}

    ${props => props.h4 && css`
        font-size: 2.5rem;

        @media (min-width: 600px) {
            font-size: 3.07696;
        }
    
        @media (min-width: 1280px) {
            font-size: 3.41888rem;
        }
    `}

    ${props => props.h5 && css`
        font-size: 2.0rem;

        @media (min-width: 600px) {
            font-size: 2.10528rem;
        }
    
        @media (min-width: 960px) {
            font-size: 2.40608rem;
        }
    `}

    ${props => props.h6 && css`
        font-size: 2rem;
    `}
`;

export const H4 = styled.h4`
    font-size: 2.5rem;

    @media (min-width: 600px) {
        font-size: 3.07696;
    }

    @media (min-width: 1280px) {
        font-size: 3.41888rem;
    }

    ${props => props.h1 && css`
        font-size: 5.6rem;

        @media (min-width: 600px) {
            font-size: 7.6rem;
        }
    
        @media (min-width: 960px) {
            font-size: 8.8rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 9.6rem;
        }
    `}

    ${props => props.h2 && css`
        font-size: 3.8rem;

        @media (min-width: 600px) {
            font-size: 4.8rem;
        }
    
        @media (min-width: 960px) {
            font-size: 5.6rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 6rem;
        }
    `}

    ${props => props.h3 && css`
        font-size: 3.2rem;

        @media (min-width: 600px) {
            font-size: 3.84605rem;
        }
    
        @media (min-width: 960px) {
            font-size: 4.23072rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 4.61536rem;
        }
    `}

    ${props => props.h4 && css`
        font-size: 2.5rem;

        @media (min-width: 600px) {
            font-size: 3.07696;
        }
    
        @media (min-width: 1280px) {
            font-size: 3.41888rem;
        }
    `}

    ${props => props.h5 && css`
        font-size: 2.0rem;

        @media (min-width: 600px) {
            font-size: 2.10528rem;
        }
    
        @media (min-width: 960px) {
            font-size: 2.40608rem;
        }
    `}

    ${props => props.h6 && css`
        font-size: 2rem;
    `}
`;

export const H5 = styled.h5`
    font-size: 2.0rem;

    @media (min-width: 600px) {
        font-size: 2.10528rem;
    }

    @media (min-width: 960px) {
        font-size: 2.40608rem;
    }

    ${props => props.h1 && css`
        font-size: 5.6rem;

        @media (min-width: 600px) {
            font-size: 7.6rem;
        }
    
        @media (min-width: 960px) {
            font-size: 8.8rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 9.6rem;
        }
    `}

    ${props => props.h2 && css`
        font-size: 3.8rem;

        @media (min-width: 600px) {
            font-size: 4.8rem;
        }
    
        @media (min-width: 960px) {
            font-size: 5.6rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 6rem;
        }
    `}

    ${props => props.h3 && css`
        font-size: 3.2rem;

        @media (min-width: 600px) {
            font-size: 3.84605rem;
        }
    
        @media (min-width: 960px) {
            font-size: 4.23072rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 4.61536rem;
        }
    `}

    ${props => props.h4 && css`
        font-size: 2.5rem;

        @media (min-width: 600px) {
            font-size: 3.07696;
        }
    
        @media (min-width: 1280px) {
            font-size: 3.41888rem;
        }
    `}

    ${props => props.h5 && css`
        font-size: 2.0rem;

        @media (min-width: 600px) {
            font-size: 2.10528rem;
        }
    
        @media (min-width: 960px) {
            font-size: 2.40608rem;
        }
    `}

    ${props => props.h6 && css`
        font-size: 2rem;
    `}
`;

export const H6 = styled.h6`
    font-size: 2rem;

    ${props => props.h1 && css`
        font-size: 5.6rem;

        @media (min-width: 600px) {
            font-size: 7.6rem;
        }
    
        @media (min-width: 960px) {
            font-size: 8.8rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 9.6rem;
        }
    `}

    ${props => props.h2 && css`
        font-size: 3.8rem;

        @media (min-width: 600px) {
            font-size: 4.8rem;
        }
    
        @media (min-width: 960px) {
            font-size: 5.6rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 6rem;
        }
    `}

    ${props => props.h3 && css`
        font-size: 3.2rem;

        @media (min-width: 600px) {
            font-size: 3.84605rem;
        }
    
        @media (min-width: 960px) {
            font-size: 4.23072rem;
        }
    
        @media (min-width: 1280px) {
            font-size: 4.61536rem;
        }
    `}

    ${props => props.h4 && css`
        font-size: 2.5rem;

        @media (min-width: 600px) {
            font-size: 3.07696;
        }
    
        @media (min-width: 1280px) {
            font-size: 3.41888rem;
        }
    `}

    ${props => props.h5 && css`
        font-size: 2.0rem;

        @media (min-width: 600px) {
            font-size: 2.10528rem;
        }
    
        @media (min-width: 960px) {
            font-size: 2.40608rem;
        }
    `}

    ${props => props.h6 && css`
        font-size: 2rem;
    `}
`;

