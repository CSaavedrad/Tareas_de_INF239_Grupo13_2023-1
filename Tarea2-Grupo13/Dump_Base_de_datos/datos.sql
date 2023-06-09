PGDMP     1    
                {            aaa    15.2    15.2 ?    P           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            R           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            S           1262    18592    aaa    DATABASE     v   CREATE DATABASE aaa WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE aaa;
                postgres    false            �            1259    18593    Defensas    TABLE     W   CREATE TABLE public."Defensas" (
    id integer NOT NULL,
    defensa text NOT NULL
);
    DROP TABLE public."Defensas";
       public         heap    postgres    false            �            1259    18598    Defensas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Defensas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Defensas_id_seq";
       public          postgres    false    214            T           0    0    Defensas_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Defensas_id_seq" OWNED BY public."Defensas".id;
          public          postgres    false    215            �            1259    18599    Diplomacias    TABLE     �   CREATE TABLE public."Diplomacias" (
    id_reino1 integer NOT NULL,
    id_reino2 integer NOT NULL,
    es_aliado boolean NOT NULL
);
 !   DROP TABLE public."Diplomacias";
       public         heap    postgres    false            �            1259    18602    Karts    TABLE     �   CREATE TABLE public."Karts" (
    id integer NOT NULL,
    modelo text NOT NULL,
    color text NOT NULL,
    velocidad_maxima integer,
    id_personaje integer
);
    DROP TABLE public."Karts";
       public         heap    postgres    false            �            1259    18607    Karts_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Karts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Karts_id_seq";
       public          postgres    false    217            U           0    0    Karts_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Karts_id_seq" OWNED BY public."Karts".id;
          public          postgres    false    218            �            1259    18608    Personaje_habita_reino    TABLE     �   CREATE TABLE public."Personaje_habita_reino" (
    id_personaje integer NOT NULL,
    id_reino integer NOT NULL,
    fecha_registro timestamp without time zone NOT NULL,
    es_gobernante boolean NOT NULL
);
 ,   DROP TABLE public."Personaje_habita_reino";
       public         heap    postgres    false            �            1259    18611    Personaje_tiene_trabajo    TABLE     �   CREATE TABLE public."Personaje_tiene_trabajo" (
    id_trabajo integer NOT NULL,
    id_personaje integer NOT NULL,
    fecha_inicio date NOT NULL,
    fecha_termino date
);
 -   DROP TABLE public."Personaje_tiene_trabajo";
       public         heap    postgres    false            �            1259    18614 
   Personajes    TABLE     �   CREATE TABLE public."Personajes" (
    id integer NOT NULL,
    nombre text NOT NULL,
    fuerza integer NOT NULL,
    fecha_nacimiento date NOT NULL,
    objeto text
);
     DROP TABLE public."Personajes";
       public         heap    postgres    false            �            1259    18619    Personajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Personajes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Personajes_id_seq";
       public          postgres    false    221            V           0    0    Personajes_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Personajes_id_seq" OWNED BY public."Personajes".id;
          public          postgres    false    222            �            1259    18620    Reino_tiene_defensa    TABLE     n   CREATE TABLE public."Reino_tiene_defensa" (
    id_reino integer NOT NULL,
    id_defensa integer NOT NULL
);
 )   DROP TABLE public."Reino_tiene_defensa";
       public         heap    postgres    false            �            1259    18623    Reinos    TABLE     �   CREATE TABLE public."Reinos" (
    id integer NOT NULL,
    nombre text NOT NULL,
    ubicacion text NOT NULL,
    superficie integer NOT NULL
);
    DROP TABLE public."Reinos";
       public         heap    postgres    false            �            1259    18628    Reinos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Reinos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Reinos_id_seq";
       public          postgres    false    224            W           0    0    Reinos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Reinos_id_seq" OWNED BY public."Reinos".id;
          public          postgres    false    225            �            1259    18629    Trabajos    TABLE     o   CREATE TABLE public."Trabajos" (
    id integer NOT NULL,
    descripcion text,
    sueldo integer NOT NULL
);
    DROP TABLE public."Trabajos";
       public         heap    postgres    false            �            1259    18634    Trabajos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Trabajos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Trabajos_id_seq";
       public          postgres    false    226            X           0    0    Trabajos_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Trabajos_id_seq" OWNED BY public."Trabajos".id;
          public          postgres    false    227            �            1259    18635    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �           2604    18642    Defensas id    DEFAULT     n   ALTER TABLE ONLY public."Defensas" ALTER COLUMN id SET DEFAULT nextval('public."Defensas_id_seq"'::regclass);
 <   ALTER TABLE public."Defensas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    18643    Karts id    DEFAULT     h   ALTER TABLE ONLY public."Karts" ALTER COLUMN id SET DEFAULT nextval('public."Karts_id_seq"'::regclass);
 9   ALTER TABLE public."Karts" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    18644    Personajes id    DEFAULT     r   ALTER TABLE ONLY public."Personajes" ALTER COLUMN id SET DEFAULT nextval('public."Personajes_id_seq"'::regclass);
 >   ALTER TABLE public."Personajes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            �           2604    18645 	   Reinos id    DEFAULT     j   ALTER TABLE ONLY public."Reinos" ALTER COLUMN id SET DEFAULT nextval('public."Reinos_id_seq"'::regclass);
 :   ALTER TABLE public."Reinos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    18646    Trabajos id    DEFAULT     n   ALTER TABLE ONLY public."Trabajos" ALTER COLUMN id SET DEFAULT nextval('public."Trabajos_id_seq"'::regclass);
 <   ALTER TABLE public."Trabajos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226            ?          0    18593    Defensas 
   TABLE DATA           1   COPY public."Defensas" (id, defensa) FROM stdin;
    public          postgres    false    214   �M       A          0    18599    Diplomacias 
   TABLE DATA           H   COPY public."Diplomacias" (id_reino1, id_reino2, es_aliado) FROM stdin;
    public          postgres    false    216   �N       B          0    18602    Karts 
   TABLE DATA           T   COPY public."Karts" (id, modelo, color, velocidad_maxima, id_personaje) FROM stdin;
    public          postgres    false    217   �N       D          0    18608    Personaje_habita_reino 
   TABLE DATA           i   COPY public."Personaje_habita_reino" (id_personaje, id_reino, fecha_registro, es_gobernante) FROM stdin;
    public          postgres    false    219   yP       E          0    18611    Personaje_tiene_trabajo 
   TABLE DATA           j   COPY public."Personaje_tiene_trabajo" (id_trabajo, id_personaje, fecha_inicio, fecha_termino) FROM stdin;
    public          postgres    false    220   iQ       F          0    18614 
   Personajes 
   TABLE DATA           T   COPY public."Personajes" (id, nombre, fuerza, fecha_nacimiento, objeto) FROM stdin;
    public          postgres    false    221   R       H          0    18620    Reino_tiene_defensa 
   TABLE DATA           E   COPY public."Reino_tiene_defensa" (id_reino, id_defensa) FROM stdin;
    public          postgres    false    223   >S       I          0    18623    Reinos 
   TABLE DATA           E   COPY public."Reinos" (id, nombre, ubicacion, superficie) FROM stdin;
    public          postgres    false    224   �S       K          0    18629    Trabajos 
   TABLE DATA           =   COPY public."Trabajos" (id, descripcion, sueldo) FROM stdin;
    public          postgres    false    226   �T       M          0    18635    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    228   fU       Y           0    0    Defensas_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Defensas_id_seq"', 15, true);
          public          postgres    false    215            Z           0    0    Karts_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Karts_id_seq"', 23, true);
          public          postgres    false    218            [           0    0    Personajes_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Personajes_id_seq"', 13, true);
          public          postgres    false    222            \           0    0    Reinos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Reinos_id_seq"', 9, true);
          public          postgres    false    225            ]           0    0    Trabajos_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Trabajos_id_seq"', 10, true);
          public          postgres    false    227            �           2606    18648    Defensas Defensas_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Defensas"
    ADD CONSTRAINT "Defensas_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Defensas" DROP CONSTRAINT "Defensas_pkey";
       public            postgres    false    214            �           2606    18650    Diplomacias Diplomacias_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_pkey" PRIMARY KEY (id_reino1, id_reino2);
 J   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_pkey";
       public            postgres    false    216    216            �           2606    18652    Karts Karts_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_pkey";
       public            postgres    false    217            �           2606    18654 2   Personaje_habita_reino Personaje_habita_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_pkey" PRIMARY KEY (id_personaje, id_reino);
 `   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_pkey";
       public            postgres    false    219    219            �           2606    18656 4   Personaje_tiene_trabajo Personaje_tiene_trabajo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_pkey" PRIMARY KEY (id_personaje, id_trabajo);
 b   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_pkey";
       public            postgres    false    220    220            �           2606    18658    Personajes Personajes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Personajes"
    ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Personajes" DROP CONSTRAINT "Personajes_pkey";
       public            postgres    false    221            �           2606    18660 ,   Reino_tiene_defensa Reino_tiene_defensa_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public."Reino_tiene_defensa"
    ADD CONSTRAINT "Reino_tiene_defensa_pkey" PRIMARY KEY (id_reino, id_defensa);
 Z   ALTER TABLE ONLY public."Reino_tiene_defensa" DROP CONSTRAINT "Reino_tiene_defensa_pkey";
       public            postgres    false    223    223            �           2606    18662    Reinos Reinos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Reinos"
    ADD CONSTRAINT "Reinos_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Reinos" DROP CONSTRAINT "Reinos_pkey";
       public            postgres    false    224            �           2606    18664    Trabajos Trabajos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Trabajos"
    ADD CONSTRAINT "Trabajos_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Trabajos" DROP CONSTRAINT "Trabajos_pkey";
       public            postgres    false    226            �           2606    18666 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    228            �           2606    18667 &   Diplomacias Diplomacias_id_reino1_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino1_fkey" FOREIGN KEY (id_reino1) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino1_fkey";
       public          postgres    false    224    3235    216            �           2606    18672 &   Diplomacias Diplomacias_id_reino2_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino2_fkey" FOREIGN KEY (id_reino2) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 T   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino2_fkey";
       public          postgres    false    224    3235    216            �           2606    18677    Karts Karts_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_id_personaje_fkey";
       public          postgres    false    217    3231    221            �           2606    18682 ?   Personaje_habita_reino Personaje_habita_reino_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 m   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_id_personaje_fkey";
       public          postgres    false    3231    219    221            �           2606    18687 ;   Personaje_habita_reino Personaje_habita_reino_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_habita_reino"
    ADD CONSTRAINT "Personaje_habita_reino_id_reino_fkey" FOREIGN KEY (id_reino) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public."Personaje_habita_reino" DROP CONSTRAINT "Personaje_habita_reino_id_reino_fkey";
       public          postgres    false    224    219    3235            �           2606    18692 A   Personaje_tiene_trabajo Personaje_tiene_trabajo_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 o   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_id_personaje_fkey";
       public          postgres    false    221    220    3231            �           2606    18697 ?   Personaje_tiene_trabajo Personaje_tiene_trabajo_id_trabajo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Personaje_tiene_trabajo"
    ADD CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY (id_trabajo) REFERENCES public."Trabajos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 m   ALTER TABLE ONLY public."Personaje_tiene_trabajo" DROP CONSTRAINT "Personaje_tiene_trabajo_id_trabajo_fkey";
       public          postgres    false    226    220    3237            �           2606    18702 7   Reino_tiene_defensa Reino_tiene_defensa_id_defensa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Reino_tiene_defensa"
    ADD CONSTRAINT "Reino_tiene_defensa_id_defensa_fkey" FOREIGN KEY (id_defensa) REFERENCES public."Defensas"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 e   ALTER TABLE ONLY public."Reino_tiene_defensa" DROP CONSTRAINT "Reino_tiene_defensa_id_defensa_fkey";
       public          postgres    false    214    223    3221            �           2606    18707 5   Reino_tiene_defensa Reino_tiene_defensa_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Reino_tiene_defensa"
    ADD CONSTRAINT "Reino_tiene_defensa_id_reino_fkey" FOREIGN KEY (id_reino) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 c   ALTER TABLE ONLY public."Reino_tiene_defensa" DROP CONSTRAINT "Reino_tiene_defensa_id_reino_fkey";
       public          postgres    false    224    3235    223            ?   �   x�M̻NA���~�y��¥%Y	E(%��k�d��q��,����t!\@F����_�i���z>ζ�g��q��8��+%�ܦi�[�j��������̤��=�/꘯a�m^�Ũ�s��m����4jT�:c^��iS�iż��Tu
������4K�ɚ����Еt���%"��
��I�      A   .   x�3�4�,�2�4��`҈3���6� �F�f`�>F��� l	G      B   �  x�MR�n�0<��_P�z�ǉ�.Z�h/��%�fMkSJ���?�?VJJ� <3����*�u��1n�䌵���16tb��>`a��Y�[�v,��-cÿO_�)}]nI�������b������.­���*$"ǚ�ḿ\�%���"���������v���F��]W��g���`-���v=5��.A.T���lM�r��f�`=p
7��Fwּ���;�W#�{��%y������;B�|����r�C�*��ѡgw�B9��^kh��j�B�P9~�`���Y*�G4LaO�����ji�!T":�ܐ����H��P�9���5��r"����x9�^���b+,M��^����p��i�~������ѩD�ɼ&���׺��Ƀ���C�!��O��Ӄ�9      D   �   x�]�A�� C�p
.���@9ˬ{��_��J�k��x��-Zt]��pD�\U��&�P(���Xh�MR3���<t����fcq�]{�Wc��	�����scc��$G�$���h:+�U����h@�dl�2r�&�j8�}��D�ѐ��{�4\y�N�D�rF7�P��4�/:�6\ߨ���L\?M\�|�ݽr��w�a{Y��\�����C�Q_      E   �   x�u���0���.<a��%�����CժR.|ۀ��9 �Eg:���u2Ee)� �d�6���X:�D�Xb/r�H�Jv�E�Oe����Dos2D�NQ8M�1�6q�Rp0�x�)��&�K�Ľ��b��EO�v�Yf�����D?\�gҏ��_��z.EK      F     x�U��j�0�ϫ��(�J��9��a��R�E�"Qk$*�-y�J"$�ugv��%x��zP�@}SsBN����&�<,�`����q��i�f+��L��M��`�xReEq$�:��'V���D��dv=G�Q����k�F�xʞ����ʖ�j���'�4���%ǆ����h֬��R����2n><�4�^��9a���v{�yg��[:��B������{��Z�[.�h�>ͩ���p)Hف=�uvb$��ǣQd%���o���������&pL�r�b���k�      H   ;   x�˹�0�W�G�ǽ��:L{�`M�d�%z��*Aj�t�e�-�<��;}6��XT	I      I   0  x�M�MNA��է�S���TqaLfc�-L�	�Qvi��M8��3ݾ��ޫG0q���Ҿ������3�y0��?V����Q.���1g�/�Sk,�x$�q:Jr�8�6��b[ �b�ڍmmc���R1=h3@��J9�p�E����dݶۍm`��Y�aV��&9R)T�3�r;��`P��4�1���o��$�2xl���vY������BX�:]xxC�L����MjAl��dx�,#7��	FgV��&�U��C=���z�_�{�0�~f������:@�z�����{      K   �   x�M�1�0��+�d;1!u/Hs$B�tv^����i�'���1:���9�$˘XP�������|5R�Bm��ˍ>r^ҕ0�8����S{������\��[���� t��p�f�q�m�m
vJ�7�4}      M   �   x�m���0�Vi@�K��HR2�/!v��5��z�M̳b�Tƶj�[�@�ؖ�j���&͜s�4%�@�I����@�Cץ}�e��! UЛW��y�����VPPDh����ÿ��a�'j��K)_�-]     